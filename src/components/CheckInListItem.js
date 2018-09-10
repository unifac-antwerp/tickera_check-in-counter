import React from "react";
import PropTypes from "prop-types";

const Counter = ({ firstname, lastname, presale, checkInTime }) => {
  return (
    <li>
      {firstname} {lastname} - {presale ? "PRESALE" : "DOOR"} -{" "}
      {checkInTime.format("HH:mm")}
    </li>
  );
};

Counter.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  presale: PropTypes.bool.isRequired,
  checkInTime: PropTypes.object.isRequired
};

export default Counter;
