import { css } from "styled-components";

const colors = {
  bg: "#262626",
  textDefault: "#EBF1F1",
  textSecondary: "#BEC3C7"
};

const textStyles = {
  heading01: css`
    font-size: 3.6em;
    text-transform: uppercase;
    font-weight: 600;
  `,
  heading02: css`
    font-size: 1.4em;
    text-transform: uppercase;
    color: ${colors.textSecondary};
  `
};

export { colors, textStyles };
