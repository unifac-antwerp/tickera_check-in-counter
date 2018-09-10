import React from "react";
import PropTypes from "prop-types";

const Counter = ({ totalCheckIns, presaleCheckIns, doorCheckIns }) => {
  return (
    <div>
      <h1>{totalCheckIns}</h1>
      <ul>
        <li>{doorCheckIns} door</li>
        <li>{presaleCheckIns} presale</li>
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
