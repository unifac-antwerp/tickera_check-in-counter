export const GET_EVENT_INFO = "GET_EVENT_INFO";
export const GET_TICKET_DATA = "GET_TICKET_DATA";

export function getEventInfo(eventInfo) {
  return {
    type: GET_EVENT_INFO,
    eventInfo
  };
}

export function getTicketData(checkInData) {
  return {
    type: GET_TICKET_DATA,
    checkInData
  };
}
