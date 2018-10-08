import { put, call, fork } from "redux-saga/effects";
import * as actions from "../actions";
import { camelizeKeys } from "humps";
import { API_KEY } from "../lib/constants";
const axios = require("axios");

const api = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://www.unifac.be/tc-api/${API_KEY}`
});

export function fetchEventInfoApi() {
  return api
    .get("/event_essentials")
    .then(response => camelizeKeys(response.data));
}

export function fetchCheckInDataApi() {
  return api
    .get("/tickets_info/3000/1")
    .then(response => camelizeKeys(response.data));
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
