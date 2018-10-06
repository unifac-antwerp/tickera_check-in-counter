import React from "react";
import PropTypes from "prop-types";
import { Wrap, Name, Type, Time } from "./CheckInListItem.styled";

const Counter = ({ firstname, lastname, presale, checkInTime }) => {
  return (
    <Wrap>
      <div>
        <Name>
          {firstname} {lastname}
        </Name>
        <Type> - {presale ? "VVK" : "ADK"}</Type>
      </div>
      <Time>{checkInTime.format("HH:mm")}</Time>
    </Wrap>
  );
};

Counter.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  presale: PropTypes.bool.isRequired,
  checkInTime: PropTypes.object.isRequired
};

export default Counter;
