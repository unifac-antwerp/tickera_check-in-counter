import { css } from "styled-components";

export const colors = {
  bg: "#262626",
  textDefault: "#EBF1F1",
  textSecondary: "#BEC3C7"
};

export const textStyles = {
  heading01: css`
    font-size: 2.2em;
    text-transform: uppercase;
    font-weight: 600;
  `,
  heading02: css`
    font-size: 1.4em;
    text-transform: uppercase;
    color: ${colors.textSecondary};
  `
};

export default { colors, textStyles };
