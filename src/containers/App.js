import * as React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTicketData } from "../actions";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { additional, checkIns } = this.props;

    return (
      <div>
        <h1>checked in: {checkIns.length}</h1>
        <h1>total: {additional.resultsCount}</h1>
      </div>
    );
  }
}

App.propTypes = {
  additional: PropTypes.object.isRequired,
  checkIns: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  const { ticketData } = state;
  const { additional, checkIns } = ticketData;

  return {
    additional,
    checkIns
  };
}

export default connect(mapStateToProps)(App);
