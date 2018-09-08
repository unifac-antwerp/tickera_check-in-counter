import React from "react";
import PropTypes from "prop-types";

const TicketStats = ({ checkIns, additional }) => {
  return (
    <div>
      <h1>checked in: {checkIns.length}</h1>
      <h1>total: {additional.resultsCount}</h1>
    </div>
  );
};

TicketStats.propTypes = {
  additional: PropTypes.object.isRequired,
  checkIns: PropTypes.array.isRequired
};

export default TicketStats;
