import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import {
  Wrap,
  StyledProgressRing,
  ContentWrap,
  Total,
  LegendList,
  LegendListItem
} from "./Counter.styled";
import { ScaleLoader } from "react-spinners";
import { getProgress } from "./Counter.utils";

const Counter = ({
  soldTickets,
  totalCheckIns,
  presaleCheckIns,
  doorCheckIns,
  theme
}) => (
  <Wrap>
    <StyledProgressRing
      radius={150}
      stroke={8}
      progress={getProgress(totalCheckIns, soldTickets)}
    />
    <ContentWrap>
      {!!totalCheckIns ? (
        <Fragment>
          <Total>{totalCheckIns}</Total>
          <LegendList>
            <LegendListItem>{doorCheckIns} ADK/OFFLINE</LegendListItem>
            <LegendListItem>•</LegendListItem>
            <LegendListItem>{presaleCheckIns} VVK</LegendListItem>
          </LegendList>
        </Fragment>
      ) : (
        <ScaleLoader height={16} color={theme.colors.textSecondary} />
      )}
    </ContentWrap>
  </Wrap>
);

Counter.propTypes = {
  soldTickets: PropTypes.number.isRequired,
  totalCheckIns: PropTypes.number.isRequired,
  presaleCheckIns: PropTypes.number.isRequired,
  doorCheckIns: PropTypes.number.isRequired
};

export default withTheme(Counter);
