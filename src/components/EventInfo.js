import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ico from "../assets/svg/ico-total-tickets.svg";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6vw;
`;

const Subtitle = styled.h2`
  margin-top: 4px;
`;

const SoldTicketsWrap = styled.span`
  font-size: 1.6em;
  font-weight: 600;
  margin-top: 8px;
`;

const Image = styled.img`
  margin-right: 8px;
  width: 20px;
  height: 12px;
`;

const Counter = ({ name, date, location, soldTickets }) => {
  return (
    <Wrap>
      <h1>{name}</h1>
      <Subtitle>
        {date} - {location}
      </Subtitle>
      <SoldTicketsWrap>
        <Image src={ico} alt="" width="20" height="12" />
        {soldTickets}
      </SoldTicketsWrap>
    </Wrap>
  );
};

Counter.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  soldTickets: PropTypes.number.isRequired
};

export default Counter;
