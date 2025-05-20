//@@viewOn:imports
import React from "react";
import "./App.css"; 


import RouteHeader from "./components/RouteHeader";
import GoodsLedger from "./goods-ledger/GoodsLedger";
import COLORS from "./components/styles/palette"
//@@viewOff:imports

//@@viewOn:constants
const Css = {
  app: {
    minHeight: "100vh",
    backgroundColor: COLORS.background,
    color: COLORS.textPrimary,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "24px",
  },
  header: {
    backgroundColor: COLORS.surface,
    borderRadius: "8px",
    padding: "16px 24px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: "8px",
    padding: "24px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
    overflowY: "auto",
  },
};
//@@viewOff:constants

function App() {
  //@@viewOn:render
  return (
    <div style={Css.app}>
      <header style={Css.header}>
        <RouteHeader />
      </header>
      <main style={Css.content}>
        <GoodsLedger />
      </main>
    </div>
  );
  //@@viewOff:render
}

export default App;
