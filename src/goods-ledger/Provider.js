//@@viewOn:imports
import React, { useEffect, useState, createContext, useContext } from "react";
import { getItems } from "./firebase/items"; // tvoje funkce pro načtení z Firestore
//@@viewOff:imports

//@@viewOn:context
const GoodsContext = createContext(null);
//@@viewOff:context

//@@viewOn:provider
function GoodsProvider({ children }) {
  const [data, setData] = useState([]);
  const [state, setState] = useState("pending");
  const [error, setError] = useState(null);

  const load = async () => {
    setState("pending");
    try {
      const items = await getItems();
      setData(items);
      setState("ready");
    } catch (e) {
      console.error("Load failed:", e);
      setError(e);
      setState("error");
    }
  };

  useEffect(() => {
    load();
  }, []);

  const value = {
    data,
    state,
    error,
    handlerMap: { load },
  };

  return (
    <GoodsContext.Provider value={value}>
      {typeof children === "function" ? children(value) : children}
    </GoodsContext.Provider>
  );
}
//@@viewOff:provider

//@@viewOn:hook
function useGoods() {
  return useContext(GoodsContext);
}
//@@viewOff:hook

//@@viewOn:exports
export { useGoods };
export default GoodsProvider;
//@@viewOff:exports
