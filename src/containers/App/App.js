import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import HomeScreen from "../HomeScreen";
import { Wrap } from "./App.styled";

class App extends React.Component {
  render() {
    const { eventInfo, checkIns } = this.props;

    return (
      <Wrap>
        <HomeScreen
          eventInfo={eventInfo}
          checkIns={checkIns.filter(c => c.checkInTime < moment())}
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
