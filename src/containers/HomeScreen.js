import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";
import Counter from "../components/Counter";
import EventInfo from "../components/EventInfo";
import Graph from "../components/Graph";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6vw;
`;

const HomeScreen = ({ eventInfo, checkIns, focusMode }) => {
  return !!eventInfo.eventName || !!checkIns.length ? (
    <Wrap>
      <EventInfo
        name={eventInfo.eventName}
        date={moment(eventInfo.eventDateTime, "MMMM D, YYYY HH:mm").format(
          "dd D MMM, HH:mm"
        )}
        location={eventInfo.eventLocation}
        soldTickets={eventInfo.soldTickets}
      />

      <Counter
        soldTickets={eventInfo.soldTickets}
        totalCheckIns={checkIns.length}
        presaleCheckIns={checkIns.filter(c => c.presale).length}
        doorCheckIns={checkIns.filter(c => !c.presale).length}
      />

      <Graph checkIns={checkIns} />
    </Wrap>
  ) : (
    <Wrap>
      <h1>Loading...</h1>
    </Wrap>
  );
};

HomeScreen.propTypes = {
  eventInfo: PropTypes.object.isRequired,
  checkIns: PropTypes.array.isRequired,
  focusMode: PropTypes.bool.isRequired
};

export default HomeScreen;
