import { put, call, fork } from "redux-saga/effects";
import * as actions from "../actions";
import { camelizeKeys } from "humps";
const axios = require("axios");

const corsFix = "https://cors-anywhere.herokuapp.com/";
const APIKey = "F4B7E221";

export function fetchEventInfoApi() {
  return axios
    .get(`${corsFix}https://www.unifac.be/tc-api/${APIKey}/event_essentials`)
    .then(response => camelizeKeys(response.data));
}

export function fetchTicketDataApi() {
  return axios
    .get(
      `${corsFix}https://www.unifac.be/tc-api/${APIKey}/tickets_info/99999/1`
    )
    .then(response => camelizeKeys(response.data));
}

export function* fetchEventInfo() {
  const eventInfo = yield call(fetchEventInfoApi);
  yield put(actions.getEventInfo(eventInfo));
}

export function* fetchTicketData() {
  const ticketData = yield call(fetchTicketDataApi);
  yield put(actions.getTicketData(ticketData));
}

export default function* root() {
  yield fork(fetchEventInfo);
  yield fork(fetchTicketData);
}
