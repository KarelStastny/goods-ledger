//@@viewOn:imports
import React from "react";
//@@viewOff:imports

//@@viewOn:constants
const spinnerStyle = {
  width: 60,
  height: 60,
  border: "6px solid rgba(153, 102, 255, 0.2)",
  borderTop: "6px solid rgba(153, 102, 255, 0.9)",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

const wrapperStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  minHeight: 200,
};
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

function Pending() {
  //@@viewOn:render
  return (
    <div style={wrapperStyle}>
      <div style={spinnerStyle} />
      <style>
        {`@keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }`}
      </style>
    </div>
  );
  //@@viewOff:render
}

export default Pending;
