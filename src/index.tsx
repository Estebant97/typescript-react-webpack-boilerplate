import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import { props } from "./components/data";

ReactDOM.render(
  <App {...props}/>,
  document.getElementById("output")
);