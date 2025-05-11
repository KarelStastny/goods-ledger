//@@viewOn:imports
import React, { useState } from "react";
import Button from "../simply-components/Button";
import Popover from "../simply-components/Popover";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

function Table({ columnsDefinition = [], data = [], blockActions=[], header = "header", layout = "block" }) {
  const [openPopoverIndex, setOpenPopoverIndex] = useState(null);

  //@@viewOn:render
  return (
    <div style={{ position: "relative", margin: layout === "block" ? "16px" : 0, border: layout === "block" ? "1px solid #ccc" : "none", borderRadius: layout === "block" ? 6 : 0, overflow: "hidden", backgroundColor: "#fff", boxShadow: layout === "block" ? "0 4px 10px rgba(0,0,0,0.25)" : "none" }}>
      {header && (
        <div
          style={{
            padding: "16px 24px",
            fontWeight: "bold",
            fontSize: 18,
            borderBottom: "1px solid #eee",
            position: "relative",
            zIndex: 1,
          }}
        >
          {header}
          {blockActions &&
            blockActions.map((action, i) => (
              <Button key={i} style={{ marginBottom: 4 }} onClick={action.onClick} onClose={action.onClose}>{action.label}</Button>
            ))}
        </div>
      )}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {columnsDefinition.map((col) => (
              <th
                key={col.key}
                style={{
                  borderBottom: "1px solid #ccc",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                {col.Header}
              </th>
            ))}
            <th
              style={{
                borderBottom: "1px solid #ccc",
                textAlign: "right",
                padding: "8px",
                width: "1%",
                whiteSpace: "nowrap",
              }}
            >
              Actions
            </th>
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
                  <td
                    key={col.key}
                    style={{ padding: "8px", borderBottom: "1px solid #eee" }}
                  >
                    {col.cell ? col.cell(row) : row[col.key]}
                  </td>
                ))}
                <td
                  style={{
                    padding: "8px",
                    borderBottom: "1px solid #eee",
                    position: "relative",
                    textAlign: "right",
                    whiteSpace: "nowrap",
                  }}
                >
                  {visibleActions.map((action, i) => (
                    <Button key={i} onClick={() => action.onClick(row)}>
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
                      style={{
                        cursor: "pointer",
                        display: "inline-block",
                        padding: "4px 6px",
                        fontSize: "18px",
                        userSelect: "none",
                      }}
                      title="More actions"
                    >
                      ⋮
                    </span>
                  )}

                  {openPopoverIndex === rowIndex && (
                    <Popover>
                      {collapsedActions.map((action, i) => (
                        <div key={i} style={{ marginBottom: 4 }}>
                          <Button
                            onClick={() => {
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
  //@@viewOff:render
}

export default Table;
