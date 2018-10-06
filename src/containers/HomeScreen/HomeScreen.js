import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { Counter, EventInfo, Graph } from "../../components";
import { removeCheckInsBeforeEventDate } from "../../lib/utils";
import { Wrap } from "./HomeScreen.styled";

const HomeScreen = ({ eventInfo, checkIns }) => {
  return !!eventInfo.eventName || !!checkIns.length ? (
    <Wrap>
      <EventInfo
        name={eventInfo.eventName}
        date={format(eventInfo.eventDateTime, "EEEEEE d MMM, HH:mm")}
        location={eventInfo.eventLocation}
        soldTickets={eventInfo.soldTickets}
      />

      <Counter
        soldTickets={eventInfo.soldTickets}
        totalCheckIns={checkIns.length}
        presaleCheckIns={checkIns.filter(c => c.presale).length}
        doorCheckIns={checkIns.filter(c => !c.presale).length}
      />

      <Graph
        checkIns={removeCheckInsBeforeEventDate(
          checkIns,
          eventInfo.eventDateTime
        )}
      />
    </Wrap>
  ) : (
    <Wrap>
      <h2>Loading...</h2>
    </Wrap>
  );
};

HomeScreen.propTypes = {
  eventInfo: PropTypes.object.isRequired,
  checkIns: PropTypes.array.isRequired
};

export default HomeScreen;
