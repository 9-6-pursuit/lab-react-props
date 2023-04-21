import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Initial render
ReactDOM.render(
  <App />,
document.getElementById("root")
);

// Re-rendering upon update
document.querySelector('form').onsubmit = (event) => {
  event.preventDefault()
  ReactDOM.render(
    <App />,
  document.getElementById("root")
);
}
