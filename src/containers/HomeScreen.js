import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";
import Counter from "../components/Counter";
import EventInfo from "../components/EventInfo";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeScreen = ({ eventInfo, checkIns, focusMode }) => {
  return (
    <Wrap>
      {!!eventInfo.eventName && (
        <EventInfo
          name={eventInfo.eventName}
          date={moment(eventInfo.eventDateTime, "MMMM D, YYYY HH:mm").format(
            "dd D MMM, HH:mm"
          )}
          location={eventInfo.eventLocation}
          soldTickets={eventInfo.soldTickets}
        />
      )}
      {!!checkIns.length && (
        <Counter
          soldTickets={eventInfo.soldTickets}
          totalCheckIns={checkIns.length}
          presaleCheckIns={checkIns.filter(c => c.presale).length}
          doorCheckIns={checkIns.filter(c => !c.presale).length}
        />
      )}
    </Wrap>
  );
};

HomeScreen.propTypes = {
  eventInfo: PropTypes.object.isRequired,
  checkIns: PropTypes.array.isRequired,
  focusMode: PropTypes.bool.isRequired
};

export default HomeScreen;
