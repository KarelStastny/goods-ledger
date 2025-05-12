//@@viewOn:imports
import React from "react";
import { getButtonStyles } from "../styles/theme.js"; // přímý import stylů
//@@viewOff:imports

function Button({ children, onClick, variant = "filled", disabled = false, style = {}, ...props }) {
  const combinedStyles = {
    ...getButtonStyles({ variant, disabled }),
    ...style,
  };

  return (
    <button onClick={onClick} style={combinedStyles} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

export default Button;
