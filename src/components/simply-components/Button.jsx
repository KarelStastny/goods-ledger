//@@viewOn:imports
import React from "react";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

function Button({ children, onClick, onClose, style = {}, ...props }) {
  //@@viewOn:render
  return (
    <button
      onClick={onClick || onClose}
      style={{
        padding: "6px 10px",
        backgroundColor: "#eee",
        border: "1px solid #ccc",
        borderRadius: "4px",
        cursor: "pointer",
        marginRight: "4px",
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
  //@@viewOff:render
}

export default Button;
