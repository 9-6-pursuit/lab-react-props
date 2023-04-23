// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

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