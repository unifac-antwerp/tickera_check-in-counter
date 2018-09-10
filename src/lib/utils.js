export const getCheckIns = ticketData =>
  //TODO: implement door tickets -> include payed date in checkIns array
  ticketData
    .map(ticket => ticket.data && ticket.data.dateChecked)
    .filter(Boolean);

export const getInfo = ticketData =>
  ticketData.map(ticket => ticket.additional).filter(Boolean)[0];
