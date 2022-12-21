import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import "./styles/index.css"

window.React = React;

ReactDOM.createRoot(document.getElementById("root")).render(
  /*<React.StrictMode>*/
  <Root />
  /*</React.StrictMode>*/
);
