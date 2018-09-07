export const getCheckIns = ticketData =>
  ticketData
    .map(ticket => ticket.data && ticket.data.dateChecked)
    .filter(Boolean);

export const getTicketTypes = ticketData =>
  ticketData
    .map(ticket => ticket.data && ticket.data.customFields)
    .map(
      customFieldsArray =>
        customFieldsArray &&
        customFieldsArray
          .filter(item => item[0] === "Ticket Type")
          .map(t => `${t[1]}`)
    )
    .map(i => i && `${i[0]}`)
    .reduce(
      (b, c) => (
        c &&
          (
            b[b.findIndex(d => d.name === c)] ||
            b[b.push({ name: c, count: 0 }) - 1]
          ).count++,
        b
      ),
      []
    );

export const getAdditional = ticketData =>
  ticketData.map(ticket => ticket.additional).filter(Boolean);
