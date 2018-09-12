import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CheckInListItem from "../components/CheckInListItem";

const ListWrap = styled.ul`
  height: 100%;
  overflow-y: scroll;
  margin: 32px 0 40px;
  width: 300px;
`;

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
