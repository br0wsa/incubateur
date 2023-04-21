import React from "react";
import ReactDOM from "react-dom";

const ShadowPortal = ({ children }) => {
  // console.log(children);

  const shadowRootContainer = document.getElementById("shadow-root");

  return ReactDOM.createPortal(
    <React.Fragment>{children}</React.Fragment>,
    shadowRootContainer,
  );
};

export default ShadowPortal;
