//@@viewOn:imports
import React, { useEffect, useState } from "react";
//@@viewOff:imports

//@@viewOn:css
const COLORS = {
  success: { background: "#d4edda", border: "#28a745", text: "#155724", header: "Úspěch" },
  error: { background: "#f8d7da", border: "#dc3545", text: "#721c24", header: "Chyba" },
  warning: { background: "#fff3cd", border: "#ffc107", text: "#856404", header: "Upozornění" },
};

const wrapperStyle = {
  position: "fixed",
  top: 20,
  right: 20,
  zIndex: 9999,
  minWidth: 280,
  maxWidth: 360,
  padding: 16,
  borderRadius: 6,
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
  display: "flex",
  flexDirection: "column",
  gap: 8,
};
//@@viewOff:css

//@@viewOn:component
function Alert({ alert, duration = 5000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!alert || !visible) return null;

  const colorSet = COLORS[alert.type] || COLORS.success;

  return (
    <div
      style={{
        ...wrapperStyle,
        backgroundColor: colorSet.background,
        borderLeft: `6px solid ${colorSet.border}`,
        color: colorSet.text,
      }}
    >
      <strong>{colorSet.header}</strong>
      <div>{alert.message}</div>
    </div>
  );
}
//@@viewOff:component

export default Alert;
