import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import { props } from "./data";

ReactDOM.render(
  <App {...props}/>,
  document.getElementById("output")
);