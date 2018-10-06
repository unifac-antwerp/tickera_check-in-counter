import { isAfter } from "date-fns";
import { DOOR_TICKET_TYPE, OFFLINE_TICKET_TYPE } from "./constants";
import { getUnixTime, parse, addMinutes } from "date-fns";
import nl from "date-fns/locale/nl";

const getCheckedTickets = ticketData =>
  enhanceCheckInData(
    ticketData.filter(t => t.data && t.data.dateChecked).filter(Boolean),
    {
      presale: true
    }
  );

const getDoorTickets = ticketData =>
  enhanceCheckInData(getTicketsByType(ticketData, DOOR_TICKET_TYPE), {
    presale: false
  });

const getOfflineTickets = (ticketData, eventDate) => {
  const offlineTickets = getTicketsByType(ticketData, OFFLINE_TICKET_TYPE);

  return offlineTickets.map(
    (ticket, i) =>
      ticket.data && {
        ...ticket.data,
        presale: false,
        offlineTicket: true,
        checkInTime: addMinutes(
          eventDate,
          (60 / offlineTickets.length || 0) * i + 30
        )
      }
  );
};

const enhanceCheckInData = (ticketData, enhanceData) =>
  ticketData.map(
    ticket =>
      ticket.data && {
        ...ticket.data,
        ...enhanceData
      }
  );

const getTicketsByType = (ticketData, type) =>
  ticketData.filter(
    ticket =>
      ticket.data &&
      ticket.data.customFields.filter(
        customField =>
          customField[0] === "Ticket Type" && customField[1] === type
      ).length !== 0 &&
      ticket
  );

const getCheckInTime = ticket => {
  const dateFormat = "d MMMM yyyy - HH:mm";

  if (ticket.checkInTime) {
    return ticket.checkInTime;
  } else if (ticket.dateChecked) {
    return parse(ticket.dateChecked, dateFormat, new Date(), {
      locale: nl
    });
  } else if (ticket.paymentDate) {
    return parse(ticket.paymentDate, dateFormat, new Date());
  } else {
    return new Date();
  }
};

export const getCheckIns = (ticketData, eventDate) => {
  const checkedTickets = getCheckedTickets(ticketData);
  const doorTickets = getDoorTickets(ticketData);
  const offlineTickets = eventDate && getOfflineTickets(ticketData, eventDate);

  return checkedTickets
    .concat(doorTickets)
    .concat(offlineTickets)
    .filter(ticket => ticket !== undefined)
    .map((ticket, index) => ({
      id: index,
      firstname: ticket.buyerFirst || "firstname",
      lastname: ticket.buyerLast || "lastname",
      presale: ticket.presale || false,
      offlineTicket: ticket.offlineTicket || false,
      checkInTime: getCheckInTime(ticket)
    }))
    .sort(
      (a, b) =>
        a.checkInTime > b.checkInTime
          ? 1
          : b.checkInTime > a.checkInTime
            ? -1
            : 0
    );
};

export const getChartData = array => {
  var result = {};

  array
    .map(c => {
      return {
        time: getUnixTime(c.checkInTime),
        presale: c.presale
      };
    })
    .forEach(
      (v, i) =>
        !result[v.time] ? (result[v.time] = [i]) : result[v.time].push(i)
    );

  Object.keys(result).forEach(
    v => (result[v] = { index: result[v], length: result[v].length })
  );

  return Object.entries(result).map(([key, value]) => ({
    time: Number(key),
    checkIns: value.length
  }));
};

export const removeCheckInsBeforeEventDate = (checkIns, eventDate) =>
  checkIns.filter(checkIn => isAfter(checkIn.checkInTime, eventDate));
