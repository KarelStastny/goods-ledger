//@@viewOn:imports
import React from "react";
import COLORS from "../styles/palette";
//@@viewOff:imports

//@@viewOn:css
const Css = {
  base: {
    padding: "10px 16px",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
  },
  filled: {
    backgroundColor: COLORS.primary,
    color: COLORS.textPrimary,
  },
  outlined: {
    backgroundColor: "transparent",
    border: `1px solid ${COLORS.primary}`,
    color: COLORS.primary,
  },
  text: {
    backgroundColor: "transparent",
    color: COLORS.primary,
  },
  disabled: {
    backgroundColor: COLORS.disabled,
    color: COLORS.textSecondary,
    cursor: "not-allowed",
  },
};
//@@viewOff:css

//@@viewOn:helpers
function getButtonStyle({ variant, disabled }) {
  if (disabled) return { ...Css.base, ...Css.disabled };

  switch (variant) {
    case "outlined":
      return { ...Css.base, ...Css.outlined };
    case "text":
      return { ...Css.base, ...Css.text };
    default:
      return { ...Css.base, ...Css.filled };
  }
}
//@@viewOff:helpers

function Button({ children, onClick, variant = "filled", disabled = false, style = {}, ...props }) {
  const combinedStyle = { ...getButtonStyle({ variant, disabled }), ...style };

  //@@viewOn:render
  return (
    <button onClick={onClick} style={combinedStyle} disabled={disabled} {...props}>
      {children}
    </button>
  );
  //@@viewOff:render
}

export default Button;
