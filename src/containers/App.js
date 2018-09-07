import * as React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTicketData } from "../actions";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ticketData } = this.props;

    const peopleInside = ticketData.items
      .map(t => t && t.data && t.data.date_checked)
      .filter(Boolean).length;

    const ticketTypes = []
      .concat(...ticketData.items.map(t => t && t.data && t.data.custom_fields))
      .filter(t => t && t[0] === "Ticket Type");

    const nonLid = ticketTypes.filter(
      t => t && t[1] === "SOFIA 2DE ZIT TD (Geen lid)"
    ).length;

    const lid = ticketTypes.filter(t => t && t[1] === "SOFIA 2DE ZIT TD (Lid)")
      .length;

    return (
      <div>
        <h1>checked in: {peopleInside}</h1>
        <h1>leden: {lid}</h1>
        <h1>non-leden: {nonLid}</h1>
        <h1>total: {ticketData.items.length - 1}</h1>
      </div>
    );
  }
}

App.propTypes = {
  ticketData: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  const { ticketData } = state;

  return {
    ticketData
  };
}

export default connect(mapStateToProps)(App);
