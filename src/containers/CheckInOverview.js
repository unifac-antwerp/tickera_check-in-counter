import React from "react";
import PropTypes from "prop-types";
import CheckInListItem from "../components/CheckInListItem";

const CheckInOverview = ({ checkIns }) => {
  return (
    <ul>
      {checkIns.map(c => (
        <CheckInListItem
          key={c.id}
          firstname={c.firstname}
          lastname={c.lastname}
          presale={c.presale}
          checkInTime={c.checkInTime}
        />
      ))}
    </ul>
  );
};

CheckInOverview.propTypes = {
  checkIns: PropTypes.array.isRequired
};

export default CheckInOverview;
