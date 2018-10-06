import React from "react";
import PropTypes from "prop-types";
import { Wrap, Text } from "./Button.styled";

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
