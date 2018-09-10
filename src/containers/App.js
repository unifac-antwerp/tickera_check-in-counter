import React from "react";
import { connect } from "react-redux";
import HomeScreen from "./HomeScreen";
import CheckInOverview from "./CheckInOverview";

class App extends React.Component {
  render() {
    const { eventInfo, checkIns } = this.props;

    return (
      <div>
        <HomeScreen
          eventInfo={eventInfo}
          checkIns={checkIns}
          focusMode={false}
        />
        <CheckInOverview checkIns={checkIns} />
      </div>
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
