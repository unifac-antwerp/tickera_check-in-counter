import React from "react";
import PropTypes from "prop-types";

const Counter = ({ title, date, location, ticketsSold }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>
        {date} - {location}
      </h2>
      <span>Tickets sold: {ticketsSold}</span>
    </div>
  );
};

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  ticketsSold: PropTypes.number.isRequired
};

export default Counter;
