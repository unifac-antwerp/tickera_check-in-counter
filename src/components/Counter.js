import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ProgressRing from "./ProgressRing";

const Wrap = styled.div`
  margin-top: 40px;
  position: relative;
  width: 300px;
  height: 100%;
`;

const StyledProgressRing = styled(ProgressRing)`
  position: absolute;
  top: 0;
  left: 0;
`;

const ContentWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Total = styled.h1`
  font-size: 88px;
  font-weight: 600;
`;

const LegendList = styled.ul`
  margin-top: 8px;
  display: flex;
`;

const LegendListItem = styled.li`
  font-size: 1.4em;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

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
        progress={(100 / soldTickets) * (doorCheckIns + presaleCheckIns)}
      />
      <ContentWrap>
        <Total>{totalCheckIns}</Total>
        <LegendList>
          <LegendListItem>{doorCheckIns} ADK</LegendListItem>
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
