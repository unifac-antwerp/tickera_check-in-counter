import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import HomeScreen from "../HomeScreen";
import CheckInOverview from "../CheckInOverview";
import Button from "./../../components/Button";
import { removeCheckInsBeforeEventDate } from "../../lib/utils";
import { Wrap } from "./App.styled";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverview: false
    };
  }

  render() {
    const { eventInfo, checkIns } = this.props;
    const { showOverview } = this.state;

    return (
      <Wrap>
        {!showOverview && (
          <HomeScreen
            eventInfo={eventInfo}
            checkIns={checkIns.filter(c => c.checkInTime < moment())}
            focusMode={false}
          />
        )}
        {showOverview && (
          <CheckInOverview
            checkIns={removeCheckInsBeforeEventDate(
              checkIns,
              eventInfo.eventDateTime
            ).filter(c => !c.offlineTicket)}
          />
        )}
        <Button
          text={!showOverview ? "Show Check In's" : "Show Counter"}
          loading={!checkIns.length}
          onClick={() => this.setState({ showOverview: !showOverview })}
        />
      </Wrap>
    );
  }
}

function mapStateToProps(state) {
  const { eventData } = state;
  const { checkIns, eventInfo } = eventData;

  return {
    eventInfo,
    checkIns
  };
}

export default connect(mapStateToProps)(App);
