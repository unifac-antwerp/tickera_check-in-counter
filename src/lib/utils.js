import moment from "moment";
import { DOOR_TICKET_TYPE, OFFLINE_TICKET_TYPE } from "./constants";

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
        checkInTime: moment(eventDate, "D MMMM, YYYY HH:mm")
          .add(30, "minutes")
          .add((120 / offlineTickets.length || 0) * i, "minutes")
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
      checkInTime:
        ticket.checkInTime ||
        moment(
          ticket.dateChecked || ticket.paymentDate,
          "MMMM D, YYYY HH:mm"
        ) ||
        {}
    }))
    .sort((a, b) => a.checkInTime.diff(b.checkInTime));
};

export const getChartData = array => {
  var result = {};

  array
    .map(c => ({
      time: moment(c.checkInTime).valueOf(),
      presale: c.presale
    }))
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
  checkIns.filter(c =>
    moment(c.checkInTime).isAfter(moment(eventDate, "D MMMM, YYYY HH:mm"))
  );
