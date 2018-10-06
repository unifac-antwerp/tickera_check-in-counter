import React from "react";
import PropTypes from "prop-types";
import CheckInListItem from "../../components/CheckInListItem";
import { ListWrap } from "./CheckInOverview.styled";

const CheckInOverview = ({ checkIns }) => {
  return (
    <ListWrap>
      {checkIns.map(c => (
        <CheckInListItem
          key={c.id}
          firstname={c.firstname}
          lastname={c.lastname}
          presale={c.presale}
          checkInTime={c.checkInTime}
        />
      ))}
    </ListWrap>
  );
};

CheckInOverview.propTypes = {
  checkIns: PropTypes.array.isRequired
};

export default CheckInOverview;
