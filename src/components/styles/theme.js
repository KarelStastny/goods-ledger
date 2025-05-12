import COLORS from "./palette.js";

export function getButtonStyles({ variant = "filled", disabled = false }) {
  const baseStyles = {
    padding: "8px 16px",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background-color 0.3s, color 0.3s",
    border: "none",
    outline: "none",
  };

  const variants = {
    filled: {
      backgroundColor: disabled ? COLORS.disabled : COLORS.primary,
      color: COLORS.textPrimary,
    },
    outlined: {
      backgroundColor: "transparent",
      color: disabled ? COLORS.textSecondary : COLORS.primary,
      border: `1px solid ${COLORS.primary}`,
    },
    text: {
      backgroundColor: "transparent",
      color: disabled ? COLORS.textSecondary : COLORS.primary,
    },
  };

  return { ...baseStyles, ...variants[variant] };
}
