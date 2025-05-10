//@@viewOn:imports
import React from "react";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

function Popover({ children, style = {} }) {
  //@@viewOn:render
  return (
    <div
      style={{
        position: "absolute",
        background: "white",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        padding: "8px",
        borderRadius: "4px",
        zIndex: 10,
        ...style,
      }}
    >
      {children}
    </div>
  );
  //@@viewOff:render
}

export default Popover;
