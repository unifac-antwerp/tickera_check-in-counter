import moment from "moment";

export const getCheckIns = ticketData => {
  const checkedTickets = ticketData
    .filter(t => t.data && t.data.dateChecked)
    .filter(Boolean)
    .map(
      t =>
        t.data && {
          ...t.data,
          presale: true
        }
    );

  const doorTickets = ticketData
    .filter(
      t =>
        t.data &&
        t.data.customFields.filter(
          customField =>
            customField[0] === "Ticket Type" &&
            customField[1] === process.env.REACT_APP_DOOR_TICKET_TYPE
        ).length !== 0 &&
        t
    )
    .map(
      t =>
        t.data && {
          ...t.data,
          presale: false
        }
    );

  return checkedTickets
    .concat(doorTickets)
    .map((t, index) => ({
      id: index,
      firstname: t.buyerFirst || "firstname",
      lastname: t.buyerLast || "lastname",
      presale: t.presale,
      checkInTime:
        moment(t.dateChecked || t.paymentDate, "MMMM D, YYYY HH:mm") || "--:--"
    }))
    .sort((a, b) => a.checkInTime.diff(b.checkInTime));
};
