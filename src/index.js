import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { injectGlobal } from "styled-components";
import reset from "styled-reset";
import globalStyles from "./styles/global";
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
    <App />
  </Provider>,
  document.getElementById("root")
);
