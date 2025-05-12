//@@viewOn:imports
import React from "react";
import COLORS from "./styles/palette";
//@@viewOff:imports

//@@viewOn:css
const Css = {
  wrapper: {
    padding: "16px 24px",
    fontSize: "24px",
    fontWeight: "bold",
    color: COLORS.textPrimary,
    backgroundColor: COLORS.surface,
    borderBottom: `1px solid ${COLORS.border}`,
    display: "flex",
    alignItems: "center",
    borderRadius: "8px",
  },
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

function RouteHeader() {
  //@@viewOn:render
  return <div style={Css.wrapper}>Goods Ledger</div>;
  //@@viewOff:render
}

export default RouteHeader;
