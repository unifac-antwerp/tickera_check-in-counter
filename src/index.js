import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider, injectGlobal } from "styled-components";
import reset from "styled-reset";
import globalStyles from "./styles/global";
import theme from "./styles/branding";
import App from "./containers/App";
import configureStore from "./store/configureStore";
import rootSaga from "./sagas";

const store = configureStore();
store.runSaga(rootSaga);

injectGlobal`
  ${reset}
  ${globalStyles}
`;

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
