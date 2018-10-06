import React from "react";
import PropTypes from "prop-types";
import {
  Wrap,
  StyledProgressRing,
  ContentWrap,
  Total,
  LegendList,
  LegendListItem
} from "./Counter.styled";
import { getProgress } from "./Counter.utils";

const Counter = ({
  soldTickets,
  totalCheckIns,
  presaleCheckIns,
  doorCheckIns
}) => {
  return (
    <Wrap>
      <StyledProgressRing
        radius={150}
        stroke={8}
        progress={getProgress(totalCheckIns, soldTickets)}
      />
      <ContentWrap>
        <Total>{totalCheckIns}</Total>
        <LegendList>
          <LegendListItem>{doorCheckIns} ADK/OFFLINE</LegendListItem>
          <LegendListItem>•</LegendListItem>
          <LegendListItem>{presaleCheckIns} VVK</LegendListItem>
        </LegendList>
      </ContentWrap>
    </Wrap>
  );
};

Counter.propTypes = {
  soldTickets: PropTypes.number.isRequired,
  totalCheckIns: PropTypes.number.isRequired,
  presaleCheckIns: PropTypes.number.isRequired,
  doorCheckIns: PropTypes.number.isRequired
};

export default Counter;
