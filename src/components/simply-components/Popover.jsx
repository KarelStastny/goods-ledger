//@@viewOn:imports
import React from "react";
import COLORS from "../styles/palette";
//@@viewOff:imports

//@@viewOn:css
const Css = {
  popover: {
    position: "absolute",
    top: "100%",
    right: 0,
    backgroundColor: COLORS.surface,
    color: COLORS.textPrimary,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    padding: "8px",
    borderRadius: "6px",
    zIndex: 10000,
    minWidth: "160px",
    whiteSpace: "nowrap",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // zarovnání dětí na střed
    gap: "6px",
  },
};
//@@viewOff:css

//@@viewOn:component
function Popover({ children, style = {} }) {
  return <div style={{ ...Css.popover, ...style }}>{children}</div>;
}
//@@viewOff:component

export default Popover;
