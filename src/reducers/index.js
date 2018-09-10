import { combineReducers } from "redux";
import { GET_TICKET_DATA, GET_EVENT_INFO } from "../actions";
import { getCheckIns, getInfo } from "../lib/utils";

function eventInfo(
  state = {
    info: {}
  },
  action
) {
  const { type, eventInfo } = action;

  switch (type) {
    case GET_EVENT_INFO:
      return {
        ...state,
        info: eventInfo
      };
    default:
      return state;
  }
}

function ticketData(
  state = {
    checkIns: []
  },
  action
) {
  const { type, ticketData } = action;

  switch (type) {
    case GET_TICKET_DATA:
      return {
        ...state,
        checkIns: getCheckIns(ticketData)
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  ticketData,
  eventInfo
});

export default rootReducer;
