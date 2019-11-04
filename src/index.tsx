import * as React from "react";
import * as ReactDOM from "react-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";
import AppContainer from './appContainer';

ReactDOM.render(
  <AppContainer />,
  document.getElementById("root")
);
