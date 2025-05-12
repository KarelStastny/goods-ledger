//@@viewOn:imports
import React from "react";
import Pending from "./Pending";
import COLORS from "../styles/palette";
//@@viewOff:imports

//@@viewOn:css
const Css = {
  overlay: {
    position: "fixed",
    top: 0, left: 0,
    width: "100%", height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    background: COLORS.surface,
    color: COLORS.textPrimary,
    borderRadius: 8,
    minWidth: 660,
    maxWidth: "90%",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: "16px 24px",
    fontWeight: "bold",
    fontSize: 18,
    borderBottom: `1px solid ${COLORS.border}`,
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 16,
    right: 24,
    cursor: "pointer",
    fontSize: 20,
    fontWeight: "normal",
    color: COLORS.textSecondary,
  },
  content: {
    padding: "24px",
    flexGrow: 1,
  },
  footer: {
    borderTop: `1px solid ${COLORS.border}`,
    padding: "16px 24px",
    textAlign: "right",
  },
  submitButton: {
    padding: "10px 16px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: COLORS.primary,
    color: "#fff",
    cursor: "pointer",
    marginLeft: 8,
  },
};
//@@viewOff:css

//@@viewOn:component
function Modal({
  open,
  onClose,
  header,
  content,
  footer,
  showCloseButton = true,
  showSubmitButton = true,
  submitButtonText = "Potvrdit",
  onSubmit,
}) {
  if (!open) return null;

  return (
    <div style={Css.overlay}>
      <div style={Css.modal}>
        {/* Header */}
        {header && (
          <div style={Css.header}>
            {header}
            {showCloseButton && (
              <span style={Css.closeButton} onClick={onClose} title="Zavřít">
                ×
              </span>
            )}
          </div>
        )}

        {/* Content */}
        <div style={Css.content}>{content ? content : <Pending />}</div>

        {/* Footer */}
        {(footer || showSubmitButton) && (
          <div style={Css.footer}>
            {footer}
            {showSubmitButton && (
              <button onClick={onSubmit} style={Css.submitButton}>
                {submitButtonText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
//@@viewOff:component

export default Modal;
