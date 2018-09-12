import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrap = styled.div`
  border: 2px solid ${props => props.theme.colors.textDefault};
  padding: 8px 16px;
  border-radius: 2px;
  display: inline-block;

  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.span`
  text-transform: uppercase;
  font-size: 1.6em;
  font-weight: 600;
`;

const Button = ({ text, onClick }) => {
  return (
    <Wrap onClick={onClick}>
      <Text>{text}</Text>
    </Wrap>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
