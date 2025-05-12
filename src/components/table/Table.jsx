//@@viewOn:imports
import React, { useState } from "react";
import Button from "../simply-components/Button";
import Popover from "../simply-components/Popover";
import COLORS from "../styles/palette";
//@@viewOff:imports

//@@viewOn:css
const Css = {
  container: {
    position: "relative",
    margin: "16px",
    border: `1px solid ${COLORS.border}`,
    borderRadius: 6,
    overflow: "hidden",
    backgroundColor: COLORS.surface,
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  },
  header: {
    padding: "16px 24px",
    fontWeight: "bold",
    fontSize: 18,
    borderBottom: `1px solid ${COLORS.border}`,
    position: "relative",
    zIndex: 1,
    color: COLORS.textPrimary,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionsRow: {
    display: "flex",
    gap: "8px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    color: COLORS.textPrimary,
  },
  th: {
    borderBottom: `1px solid ${COLORS.border}`,
    textAlign: "left",
    padding: "10px 12px",
    backgroundColor: COLORS.surface,
    color: COLORS.textSecondary,
    fontWeight: "600",
    fontSize: "14px",
  },
  td: {
    padding: "10px 12px",
    borderBottom: `1px solid ${COLORS.border}`,
    color: COLORS.textPrimary,
    fontSize: "14px",
  },
  tdActions: {
    padding: "10px 12px",
    borderBottom: `1px solid ${COLORS.border}`,
    position: "relative",
    textAlign: "right",
    whiteSpace: "nowrap",
  },
  actionIcon: {
    cursor: "pointer",
    display: "inline-block",
    padding: "4px 6px",
    fontSize: "18px",
    userSelect: "none",
    color: COLORS.primary,
  },
};
//@@viewOff:css

//@@viewOn:component
function Table({
  columnsDefinition = [],
  data = [],
  blockActions = [],
  header = "Tabulka",
  layout = "block",
}) {
  const [openPopoverIndex, setOpenPopoverIndex] = useState(null);

  return (
    <div style={Css.container}>
      {header && (
        <div style={Css.header}>
          <span>{header}</span>
          {blockActions.length > 0 && (
            <div style={Css.actionsRow}>
              {blockActions.map((action, i) => (
                <Button
                  key={i}
                  onClick={action.onClick}
                  onClose={action.onClose}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      )}

      <table style={Css.table}>
        <thead>
          <tr>
            {columnsDefinition.map((col) => (
              <th key={col.key} style={Css.th}>
                {col.Header}
              </th>
            ))}
            <th style={{ ...Css.th, textAlign: "right" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => {
            const actionList = row.actionList || [];
            const visibleActions = actionList.filter((a) => !a.collapsed);
            const collapsedActions = actionList.filter((a) => a.collapsed);

            return (
              <tr key={row.id ?? rowIndex}>
                {columnsDefinition.map((col) => (
                  <td key={col.key} style={Css.td}>
                    {col.cell ? col.cell(row) : row[col.key]}
                  </td>
                ))}
                <td style={Css.tdActions}>
                  {visibleActions.map((action, i) => (
                    <Button
                      key={i}
                      onClick={() => {
                        if (action.confirm) {
                          const ok = window.confirm(action.confirm);
                          if (!ok) return;
                        }
                        action.onClick(row);
                      }}
                    >
                      {action.label}
                    </Button>
                  ))}

                  {collapsedActions.length > 0 && (
                    <span
                      onClick={() =>
                        setOpenPopoverIndex(
                          openPopoverIndex === rowIndex ? null : rowIndex
                        )
                      }
                      style={Css.actionIcon}
                      title="Více akcí"
                    >
                      ⋮
                    </span>
                  )}

                  {openPopoverIndex === rowIndex && (
                    <Popover>
                      {collapsedActions.map((action, i) => (
                        <div key={i}>
                          <Button
                            onClick={() => {
                              if (action.confirm) {
                                const ok = window.confirm(action.confirm);
                                if (!ok) return;
                              }
                              action.onClick(row);
                              setOpenPopoverIndex(null);
                            }}
                          >
                            {action.label}
                          </Button>
                        </div>
                      ))}
                    </Popover>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
//@@viewOff:component

export default Table;
