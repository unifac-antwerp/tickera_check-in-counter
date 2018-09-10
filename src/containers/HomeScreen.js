import React from "react";
import PropTypes from "prop-types";
import Counter from "../components/Counter";
import EventInfo from "../components/EventInfo";

const TicketStats = ({ info, checkIns, focusMode }) => {
  return (
    <div>
      <EventInfo
        title="Openings TD"
        date="12 july"
        location="Waagnatie"
        ticketsSold={4203}
      />
      <Counter totalCheckIns={349} presaleCheckIns={309} doorCheckIns={40} />
    </div>
  );
};

TicketStats.propTypes = {
  info: PropTypes.object.isRequired,
  checkIns: PropTypes.array.isRequired,
  focusMode: PropTypes.bool.isRequired
};

export default TicketStats;
