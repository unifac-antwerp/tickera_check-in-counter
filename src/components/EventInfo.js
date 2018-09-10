import React from "react";
import PropTypes from "prop-types";

const Counter = ({ name, date, location, soldTickets }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>
        {date} - {location}
      </h2>
      <span>Tickets sold: {soldTickets}</span>
    </div>
  );
};

Counter.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  soldTickets: PropTypes.number.isRequired
};

export default Counter;
