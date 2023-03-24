import React from "react";
import ReactDOM from "react-dom";
// import { AppProvider } from "./ports/redux/provider";
import "./assets/css/Styles.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* <AppProvider> */}
    <App />
    {/* </AppProvider> */}
  </React.StrictMode>,
  document.getElementById("root"),
);
