import React from "react";
import PropTypes from "prop-types";
import { Wrap, Subtitle, SoldTicketsWrap, Icon } from "./EventInfo.styled";

const EventInfo = ({ name, date, location, soldTickets }) => {
  return (
    <Wrap>
      <h1>{name}</h1>
      <Subtitle>
        {date}
        {date && location && " - "}
        {location}
      </Subtitle>
      {soldTickets && (
        <SoldTicketsWrap>
          <Icon />
          {soldTickets}
        </SoldTicketsWrap>
      )}
    </Wrap>
  );
};

EventInfo.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  soldTickets: PropTypes.number.isRequired
};

export default EventInfo;
