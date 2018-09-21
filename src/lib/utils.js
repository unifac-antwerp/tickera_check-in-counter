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

  const offlineTickets = [];
  for (let i = 0; i < process.env.REACT_APP_OFFLINE_TICKETS_AMOUNT || 0; i++) {
    offlineTickets.push({
      offlineTicket: true,
      checkInTime: moment(checkedTickets[0].dateChecked, "MMMM D, YYYY HH:mm")
        .hour(23)
        .add(1, "hour")
        .add(
          (120 / process.env.REACT_APP_OFFLINE_TICKETS_AMOUNT || 0) * i,
          "minutes"
        )
    });
  }

  return checkedTickets
    .concat(doorTickets)
    .concat(offlineTickets)
    .map((t, index) => ({
      id: index,
      firstname: t.buyerFirst || "firstname",
      lastname: t.buyerLast || "lastname",
      presale: t.presale || false,
      offlineTicket: t.offlineTicket || false,
      checkInTime:
        t.checkInTime ||
        moment(t.dateChecked || t.paymentDate, "MMMM D, YYYY HH:mm") ||
        {}
    }))
    .sort((a, b) => a.checkInTime.diff(b.checkInTime));
};

export const getChartData = array => {
  var result = {};

  const strippedArray = array.map(c => ({
    time: moment(c.checkInTime).valueOf(),
    presale: c.presale
  }));

  strippedArray.forEach((v, i) => {
    if (!result[v.time]) {
      result[v.time] = [i];
    } else {
      result[v.time].push(i);
    }
  });

  Object.keys(result).forEach(v => {
    result[v] = { index: result[v], length: result[v].length };
  });

  return Object.entries(result).map(([key, value]) => ({
    time: Number(key),
    checkIns: value.length
  }));
};

export const removeCheckInsBeforeEventDate = (checkIns, eventDate) =>
  checkIns.filter(c =>
    moment(c.checkInTime).isAfter(moment(eventDate, "MMMM D, YYYY HH:mm"))
  );
