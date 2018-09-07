import { put, call, fork } from "redux-saga/effects";
import * as actions from "../actions";
import { camelizeKeys } from "humps";
const axios = require("axios");

export function fetchTicketDataApi(reddit) {
  return axios
    .get(
      `${"https://cors-anywhere.herokuapp.com/"}https://www.unifac.be/tc-api/F4B7E221/tickets_info/99999/1`
    )
    .then(response => camelizeKeys(response.data));
}

export function* fetchTicketData() {
  const ticketData = yield call(fetchTicketDataApi);
  yield put(actions.getTicketData(ticketData));
}

export default function* root() {
  yield fork(fetchTicketData);
}
