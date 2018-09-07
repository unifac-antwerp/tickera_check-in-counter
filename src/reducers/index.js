import { combineReducers } from "redux";
import { GET_TICKET_DATA } from "../actions";
import { getCheckIns, getAdditional } from "../lib/utils";

function ticketData(
  state = {
    checkIns: [],
    additional: { resultsCount: 0 }
  },
  action
) {
  const { type, ticketData } = action;

  switch (type) {
    case GET_TICKET_DATA:
      return {
        ...state,
        checkIns: getCheckIns(ticketData),
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
