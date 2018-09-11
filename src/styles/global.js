import { css } from "styled-components";
import { colors, textStyles } from "./branding";

export default css`
  html {
    -webkit-text-size-adjust: 100%;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.bg};
    color: ${colors.textDefault};
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  h1 {
    ${textStyles.heading01};
  }

  h2 {
    ${textStyles.heading02};
  }
`;
