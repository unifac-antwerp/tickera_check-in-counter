import React from "react";
import PropTypes from "prop-types";

const Counter = ({ totalCheckIns, presaleCheckIns, doorCheckIns }) => {
  return (
    <div>
      <h1>{totalCheckIns}</h1>
      <ul>
        <li>{doorCheckIns} DOOR</li>
        <li>{presaleCheckIns} PRESALE</li>
      </ul>
    </div>
  );
};

Counter.propTypes = {
  totalCheckIns: PropTypes.number.isRequired,
  presaleCheckIns: PropTypes.number.isRequired,
  doorCheckIns: PropTypes.number.isRequired
};

export default Counter;
