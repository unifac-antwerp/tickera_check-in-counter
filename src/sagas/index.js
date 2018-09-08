import { put, call, fork } from "redux-saga/effects";
import * as actions from "../actions";
import { camelizeKeys } from "humps";
const axios = require("axios");

const corsFix = "https://cors-anywhere.herokuapp.com/";

export function fetchTicketDataApi(apiKey) {
  return axios
    .get(
      `${corsFix}https://www.unifac.be/tc-api/${apiKey}/tickets_info/99999/1`
    )
    .then(response => camelizeKeys(response.data));
}

export function* fetchTicketData() {
  const ticketData = yield call(fetchTicketDataApi, "F4B7E221");
  yield put(actions.getTicketData(ticketData));
}

export default function* root() {
  yield fork(fetchTicketData);
}
