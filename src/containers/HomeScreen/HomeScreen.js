import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Counter from "../../components/Counter";
import EventInfo from "../../components/EventInfo";
import Graph from "../../components/Graph";
import { removeCheckInsBeforeEventDate } from "../../lib/utils";
import { Wrap } from "./HomeScreen.styled";

const HomeScreen = ({ eventInfo, checkIns, focusMode }) => {
  const eventDate = moment(eventInfo.eventDateTime, "MMMM D, YYYY HH:mm");

  return !!eventInfo.eventName || !!checkIns.length ? (
    <Wrap>
      <EventInfo
        name={eventInfo.eventName}
        date={eventDate.format("dd D MMM, HH:mm")}
        location={eventInfo.eventLocation}
        soldTickets={eventInfo.soldTickets}
      />

      <Counter
        soldTickets={eventInfo.soldTickets}
        totalCheckIns={checkIns.length}
        presaleCheckIns={checkIns.filter(c => c.presale).length}
        doorCheckIns={checkIns.filter(c => !c.presale).length}
      />

      <Graph checkIns={removeCheckInsBeforeEventDate(checkIns, eventDate)} />
    </Wrap>
  ) : (
    <Wrap>
      <h2>Loading...</h2>
    </Wrap>
  );
};

HomeScreen.propTypes = {
  eventInfo: PropTypes.object.isRequired,
  checkIns: PropTypes.array.isRequired,
  focusMode: PropTypes.bool.isRequired
};

export default HomeScreen;
