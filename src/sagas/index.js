import { put, call, fork } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import * as actions from "../actions";
import { camelizeKeys } from "humps";
import { API_KEY } from "../lib/constants";
const axios = require("axios");

const api = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://www.unifac.be/tc-api/${API_KEY}`
});

const updateInterval = 120; // update interval in seconds

export function fetchEventInfoApi() {
  return api
    .get("/event_essentials")
    .then(response => camelizeKeys(response.data));
}

export function fetchCheckInDataApi() {
  let result = {};
  result = api
    .get("/tickets_info/3000/1")
    .then(response => camelizeKeys(response.data));
  eventChannel(emitter => {
    const iv = setInterval(() => {
      result = api
        .get("/tickets_info/3000/1")
        .then(response => camelizeKeys(response.data));
    }, updateInterval * 1000);
    return () => {
      clearInterval(iv);
    };
  });
  return result;
}

export function* fetchEventInfo() {
  const eventInfo = yield call(fetchEventInfoApi);
  yield put(actions.getEventInfo(eventInfo));
}

export function* fetchCheckInData() {
  const checkInData = yield call(fetchCheckInDataApi);
  yield put(actions.getTicketData(checkInData));
}

export default function* root() {
  yield fork(fetchEventInfo);
  yield fork(fetchCheckInData);
}
