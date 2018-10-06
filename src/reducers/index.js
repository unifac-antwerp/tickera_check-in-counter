import { combineReducers } from "redux";
import { parse } from "date-fns";
import nl from "date-fns/locale/nl";
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
          eventDateTime: parse(
            action.eventInfo.eventDateTime,
            "d MMMM yyyy HH:mm",
            new Date(),
            { locale: nl }
          )
        }
      };
    case GET_TICKET_DATA:
      return {
        ...state,
        checkIns: getCheckIns(
          action.checkInData,
          state.eventInfo && state.eventInfo.eventDateTime
        )
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  eventData
});

export default rootReducer;
