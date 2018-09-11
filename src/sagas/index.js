import { put, call, fork } from "redux-saga/effects";
import * as actions from "../actions";
import { camelizeKeys } from "humps";
const axios = require("axios");

const prefix = "https://cors-anywhere.herokuapp.com/";

export function fetchEventInfoApi() {
  return axios
    .get(
      `${prefix}https://www.unifac.be/tc-api/${
        process.env.REACT_APP_EVENT_API_KEY
      }/event_essentials`
    )
    .then(response => camelizeKeys(response.data));
}

export function fetchCheckInDataApi() {
  return axios
    .get(
      `${prefix}https://www.unifac.be/tc-api/${
        process.env.REACT_APP_EVENT_API_KEY
      }/tickets_info/9999/1`
    )
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
