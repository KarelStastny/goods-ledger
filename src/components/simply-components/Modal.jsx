//@@viewOn:imports
import React from "react";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

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
  //@@viewOn:render
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100%", height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: 6,
          minWidth: 320,
          maxWidth: "90%",
          boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        {header && (
          <div
            style={{
              padding: "16px 24px",
              fontWeight: "bold",
              fontSize: 18,
              borderBottom: "1px solid #eee",
              position: "relative",
            }}
          >
            {header}
            {showCloseButton && (
              <span
                onClick={onClose}
                style={{
                  position: "absolute",
                  top: 16,
                  right: 24,
                  cursor: "pointer",
                  fontSize: 20,
                  fontWeight: "normal",
                }}
                title="Zavřít"
              >
                ×
              </span>
            )}
          </div>
        )}

        {/* Content */}
        <div style={{ padding: "24px" }}>
          {content}
        </div>

        {/* Footer */}
        {(footer || showSubmitButton) && (
          <div
            style={{
              borderTop: "1px solid #eee",
              padding: "16px 24px",
              textAlign: "right",
            }}
          >
            {footer}
            {showSubmitButton && (
              <button onClick={onSubmit} style={{ marginLeft: 8 }}>
                {submitButtonText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
  //@@viewOff:render
}

export default Modal;
