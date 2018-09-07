import * as React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTicketData } from "../actions";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { additional, ticketTypes, checkIns } = this.props;

    return (
      <div>
        <h1>checked in: {checkIns.length}</h1>
        <h1>leden:</h1>
        <h1>non-leden:</h1>
        <h1>total: {additional.resultsCount}</h1>
      </div>
    );
  }
}

App.propTypes = {
  ticketData: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  const { ticketData } = state;
  const { additional, ticketTypes, checkIns } = ticketData;

  return {
    additional,
    ticketTypes,
    checkIns
  };
}

export default connect(mapStateToProps)(App);
