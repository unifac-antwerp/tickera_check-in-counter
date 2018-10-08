import styled from "styled-components";
import PeopleIcon from "../../assets/icons/PeopleIcon";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Subtitle = styled.h2`
  margin-top: 4px;
`;

export const SoldTicketsWrap = styled.span`
  font-size: 1.8em;
  font-weight: 600;
  margin-top: 8px;
`;

export const Icon = styled(PeopleIcon)`
  margin-right: 8px;
`;
