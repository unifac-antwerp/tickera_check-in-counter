import React from "react";
import PropTypes from "prop-types";
import Counter from "../components/Counter";
import EventInfo from "../components/EventInfo";

const TicketStats = ({ eventInfo, checkIns, focusMode }) => {
  return (
    <div>
      {eventInfo.eventName && (
        <EventInfo
          name={eventInfo && eventInfo.eventName}
          date={eventInfo && eventInfo.eventDateTime}
          location={eventInfo && eventInfo.eventLocation}
          soldTickets={eventInfo && eventInfo.soldTickets}
        />
      )}
      <Counter totalCheckIns={349} presaleCheckIns={309} doorCheckIns={40} />
    </div>
  );
};

TicketStats.propTypes = {
  eventInfo: PropTypes.object.isRequired,
  checkIns: PropTypes.array.isRequired,
  focusMode: PropTypes.bool.isRequired
};

export default TicketStats;
