//@@viewOn:imports
import React from "react";
import COLORS from "../styles/palette";
//@@viewOff:imports

//@@viewOn:css
const Css = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    minHeight: 200,
  },
  spinner: {
    width: 60,
    height: 60,
    border: `6px solid ${COLORS.primary}33`, // 20% opacity
    borderTop: `6px solid ${COLORS.primary}`,
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};
//@@viewOff:css

//@@viewOn:render
function Pending() {
  return (
    <div style={Css.wrapper}>
      <div style={Css.spinner} />
      <style>
        {`@keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }`}
      </style>
    </div>
  );
}
//@@viewOff:render

export default Pending;
