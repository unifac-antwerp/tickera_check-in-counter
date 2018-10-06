import styled from "styled-components";
import ProgressRing from "../ProgressRing";

export const Wrap = styled.div`
  margin-top: 40px;
  position: relative;
  width: 300px;
  height: 100%;
`;

export const StyledProgressRing = styled(ProgressRing)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const ContentWrap = styled.div`
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

export const Total = styled.h1`
  font-size: 88px;
  font-weight: 600;
`;

export const LegendList = styled.ul`
  margin-top: 8px;
  display: flex;
`;

export const LegendListItem = styled.li`
  font-size: 1.4em;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;
