import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrap = styled.div`
  border: 2px solid ${props => props.theme.colors.textDefault};
  padding: 8px 16px;
  border-radius: 2px;
  display: inline-block;
  margin-bottom: 32px;
  user-select: none;
  ${props => props.loading && "opacity: 0.2;"};
  ${props => props.loading && "pointer-events: none;"};

  &:hover {
    ${props => !props.loading && "cursor: pointer;"};
  }
`;

const Text = styled.span`
  text-transform: uppercase;
  font-size: 1.6em;
  font-weight: 600;
`;

const Button = ({ text, onClick, loading }) => {
  return (
    <Wrap onClick={onClick} loading={loading}>
      <Text>{text}</Text>
    </Wrap>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Button;
