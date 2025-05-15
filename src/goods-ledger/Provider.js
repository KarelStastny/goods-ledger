//@@viewOn:imports
import { useEffect, useState, createContext, useContext, useMemo } from "react";
import { getAllItems, deleteItem, createItem } from "./firebase/calls";
import useAsyncCall from "../hooks/useAsyncCall";
//@@viewOff:imports

//@@viewOn:context
const GoodsContext = createContext(null);
//@@viewOff:context

//@@viewOn:provider
function GoodsProvider({ children }) {
  const { call: createItemCall, alert } = useAsyncCall(createItem);
  const { call: deleteItemCall } = useAsyncCall(deleteItem);

  const [data, setData] = useState([]);

  const [error, setError] = useState(null);
  const [createModal, setCreateModal] = useState({ open: false });
  const [editModal, setEditModal] = useState({ open: false });

  const load = async () => {
    try {
      const items = await getAllItems();
      setData(items);
    } catch (e) {
      console.error("Load failed:", e);
      setError(e);
    }
  };

  const handleCreateItem = async (data) => {
    await createItemCall({
      dtoIn: data,
      successMessage: "Položka byla úspěšně vytvořena.",
      errorMessage: "Nepodařilo se vytvořit položku.",
      successCallback: async () => {
        await load();
        setCreateModal(null);
      },
      errorCallback: (err) => console.error("Chyba:", err),
    });
  };

  const handleDeleteItem = async (id) => {
    await deleteItemCall({
      dtoIn: id,
      successMessage: "Položka byla úspěšně smazána",
      errorMessage: "Chyba při mazání položky",
      successCallback: async () => {
        await load();
        setCreateModal(null);
      },
      errorCallback: (err) => console.error("Chyba:", err),
    });
  };

  const onClose = () => {
    setCreateModal({ open: false });
  };

  const tableData = useMemo(() => {
    if (data.length === 0) return [];

    return data.map((row) => {
      return {
        ...row,
        actionList: [
          {
            label: "Delete",
            onClick: () => handleDeleteItem(row.id),
            confirm: true,
            collapsed: false,
          },
          {
            label: "Edit",
            onClick: () => setEditModal({ open: true }),
            confirm: true,
            collapsed: false,
          },
        ],
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
      alert,
      error,
      modals: { createModal, setCreateModal, editModal, setEditModal },

      reload: load,
      onClose: onClose,
      handleCreateItem,
    }),
    [data, error, createModal, alert]
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
