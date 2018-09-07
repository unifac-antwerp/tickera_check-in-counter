import { combineReducers } from "redux";
import { GET_TICKET_DATA } from "../actions";
import { getCheckIns, getTicketTypes, getAdditional } from "../lib/utils";

function ticketData(
  state = {
    checkIns: [],
    types: [],
    additional: {}
  },
  action
) {
  const { type, ticketData } = action;

  switch (type) {
    case GET_TICKET_DATA:
      return {
        ...state,
        checkIns: getCheckIns(ticketData),
        ticketTypes: getTicketTypes(ticketData),
        additional: getAdditional(ticketData)
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  ticketData
});

export default rootReducer;
