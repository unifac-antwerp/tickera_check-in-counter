import { combineReducers } from "redux";
import { GET_TICKET_DATA, GET_EVENT_INFO } from "../actions";
import { getCheckIns } from "../lib/utils";

function eventData(
  state = {
    checkIns: [],
    eventInfo: {}
  },
  action
) {
  switch (action.type) {
    case GET_EVENT_INFO:
      return {
        ...state,
        eventInfo: {
          ...action.eventInfo,
          soldTickets:
            Number(action.eventInfo.soldTickets) +
            (Number(process.env.REACT_APP_OFFLINE_TICKETS_AMOUNT) || 0)
        }
      };
    case GET_TICKET_DATA:
      return {
        ...state,
        checkIns: getCheckIns(action.checkInData)
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  eventData
});

export default rootReducer;
