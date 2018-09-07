export const GET_TICKET_DATA = "GET_TICKET_DATA";

export function getTicketData(ticketData) {
  return {
    type: GET_TICKET_DATA,
    ticketData
  };
}
