import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrap = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 1.4em;
  margin: 4px 0;
  padding-right: 12px;
`;

const Name = styled.span`
  font-weight: 600;
`;

const Type = styled.span`
  font-size: 10px;
`;

const Time = styled.span``;

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
