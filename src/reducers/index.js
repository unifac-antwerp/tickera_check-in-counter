import { combineReducers } from "redux";
import { GET_TICKET_DATA } from "../actions";

function ticketData(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case GET_TICKET_DATA:
      return {
        ...state,
        items: action.ticketData
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  ticketData
});

export default rootReducer;
