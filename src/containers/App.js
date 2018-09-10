import React from "react";
import { connect } from "react-redux";
import HomeScreen from "./HomeScreen";

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
