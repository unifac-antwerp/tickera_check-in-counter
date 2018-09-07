import { take, put, call, fork, select } from "redux-saga/effects";
import fetch from "isomorphic-fetch";
import * as actions from "../actions";
const axios = require("axios");

export function fetchTicketDataApi(reddit) {
  return axios
    .get(
      `${"https://cors-anywhere.herokuapp.com/"}https://www.unifac.be/tc-api/F4B7E221/tickets_info/99999/1`
    )
    .then(response => response.data);
}

export function* fetchTicketData() {
  const ticketData = yield call(fetchTicketDataApi);
  yield put(actions.getTicketData(ticketData));
}

export default function* root() {
  yield fork(fetchTicketData);
}
