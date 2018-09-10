import * as React from "react";
import { connect } from "react-redux";
import { getTicketData } from "../actions";
import HomeScreen from "./HomeScreen";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info, checkIns } = this.props;

    return (
      <div>
        <HomeScreen info={info} checkIns={checkIns} focusMode={false} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { ticketData } = state;
  const { info, checkIns } = ticketData;

  return {
    info,
    checkIns
  };
}

export default connect(mapStateToProps)(App);
