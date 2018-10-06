import React from "react";
import { connect } from "react-redux";
import HomeScreen from "../HomeScreen";
import { Wrap } from "./App.styled";

class App extends React.Component {
  render() {
    const { eventInfo, checkIns } = this.props;

    return (
      <Wrap>
        <HomeScreen
          eventInfo={eventInfo}
          checkIns={checkIns.filter(c => c.checkInTime < new Date())}
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
