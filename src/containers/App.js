import * as React from "react";
import { connect } from "react-redux";
import { getTicketData } from "../actions";
import Login from "./Login";
import TicketStats from "./TicketStats";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { additional, checkIns } = this.props;

    return (
      <div>
        <Login />
        <TicketStats additional={additional} checkIns={checkIns} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { ticketData } = state;
  const { additional, checkIns } = ticketData;

  return {
    additional,
    checkIns
  };
}

export default connect(mapStateToProps)(App);
