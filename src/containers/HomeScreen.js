import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Counter from "../components/Counter";
import EventInfo from "../components/EventInfo";

const HomeScreen = ({ eventInfo, checkIns, focusMode }) => {
  return (
    <div>
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
          totalCheckIns={checkIns.length}
          presaleCheckIns={checkIns.filter(c => c.presale).length}
          doorCheckIns={checkIns.filter(c => !c.presale).length}
        />
      )}
    </div>
  );
};

HomeScreen.propTypes = {
  eventInfo: PropTypes.object.isRequired,
  checkIns: PropTypes.array.isRequired,
  focusMode: PropTypes.bool.isRequired
};

export default HomeScreen;
