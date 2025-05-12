//@@viewOn:imports
import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useMemo,
} from "react";
import { createItem, deleteItem, getItems } from "./firebase/items"; // tvoje funkce pro načtení z Firestore
//@@viewOff:imports

//@@viewOn:context
const GoodsContext = createContext(null);
//@@viewOff:context

//@@viewOn:provider
function GoodsProvider({ children }) {
  const [data, setData] = useState([]);
  const [state, setState] = useState("pending");
  const [error, setError] = useState(null);
  const [createModal, setCreateModal] = useState({ open: false });

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

  const onClose = () => {
    setCreateModal({ open: false });
  };

  const handleSubmitCreateButton = async (data) => {
    try {
      await createItem(data);
      await load();
      onClose();
      console.log("Uloženo do Firestore!", data);
    } catch (err) {
      console.error("Chyba při ukládání do Firestore:", err);
    }
  };

  const handleDeleteItem = async (id) => {
    try{
      await deleteItem(id)
      await load()
    }catch (err) {
      console.error("chyba Při smazání")
    }
  }

  const tableData = useMemo(() => {
    if (data.length === 0) return [];

    return data.map((row) => {
      return {
        ...row,
        actionList:[
          {label: "Delete", onClick: () => handleDeleteItem(row.id), confirm: true, collapsed: true}
        ]
      
      };
    });
  }, [data]);

  useEffect(() => {
    load();

    const interval = setInterval(() => {
      load();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const value = useMemo(
    () => ({
      data: tableData,
      state,
      error,
      createModal,
      setCreateModal,
      reload: load,
      onClose: onClose,
      handleSubmitCreateButton,
    }),
    [data, state, error, createModal]
  );

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
