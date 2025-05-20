import palette from "./palette";

export function getButtonStyles({ variant = "filled", disabled = false } = {}) {
  const baseStyles = {
    padding: "8px 16px",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background-color 0.3s, color 0.3s",
    outline: "none",
  };

  const variants = {
    filled: {
      backgroundColor: disabled ? palette.disabled : palette.primary,
      color: palette.textPrimary,
      border: "none",
    },
    outlined: {
      backgroundColor: "transparent",
      color: disabled ? palette.textSecondary : palette.primary,
      border: `1px solid ${palette.primary}`,
    },
    text: {
      backgroundColor: "transparent",
      color: disabled ? palette.textSecondary : palette.primary,
      border: "none",
    },
  };

  return { ...baseStyles, ...variants[variant] };
}

export function getFormStyles() {
  return {
    form: {
      width: "100%",
      maxWidth: "600px", 
      margin: "0 auto", 
      padding: "24px",
      backgroundColor: palette.surface,
      color: palette.textPrimary,
      boxSizing: "border-box",
    },
    fieldWrapper: {
      marginBottom: "16px",
    },
    label: {
      display: "block",
      marginBottom: "6px",
      fontWeight: "bold",
      color: palette.textSecondary,
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "4px",
      border: `1px solid ${palette.border}`,
    //   backgroundColor: palette.inputBackground,
      color: palette.textPrimary,
    },
    submitButton: getButtonStyles({ variant: "filled" }),
  };
}

export function getModalStyles() {
  return {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
      padding: 16, // zajistí odsazení i na menších displejích
    },
    container: {
      background: palette.surface,
      color: palette.textPrimary,
      borderRadius: 8,
      minWidth: 480,
      maxWidth: 660,
      width: "100%",
      boxShadow: "0 6px 24px rgba(0,0,0,0.6)",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    },
    header: {
      padding: "12px 20px",
      fontWeight: "bold",
      fontSize: 18,
      borderBottom: `1px solid ${palette.border}`,
      position: "relative",
    },
    closeButton: {
      position: "absolute",
      top: 12,
      right: 20,
      cursor: "pointer",
      fontSize: 20,
      color: palette.textSecondary,
    },
    content: {
      padding: 0,
      flexGrow: 1,
    },
    footer: {
      borderTop: `1px solid ${palette.border}`,
      padding: "12px 20px",
      textAlign: "right",
    },
    submitButton: getButtonStyles({ variant: "filled" }),
  };
}
