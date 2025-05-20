//@@viewOn:imports
import { useEffect, useState, createContext, useContext, useMemo } from "react";
import {
  getAllItems,
  deleteItem,
  createItem,
  getItem,
  updateItem,
} from "./firebase/calls";
import useAsyncCall from "../hooks/useAsyncCall";
//@@viewOff:imports

//@@viewOn:context
const GoodsContext = createContext(null);
//@@viewOff:context

//@@viewOn:provider
function GoodsProvider({ children }) {
  const { call: createItemCall, alert } = useAsyncCall(createItem);
  const { call: deleteItemCall } = useAsyncCall(deleteItem);
  const { call: editItemCall } = useAsyncCall(updateItem);

  const [data, setData] = useState([]);
  const [dataItem, setDataItem] = useState();

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

  const loadOneItem = async (id) => {
    try {
      const item = await getItem(id);
      setDataItem(item);
      return item; 
    } catch (e) {
      console.error("Load failed:", e);
      setError(e);
      return null; 
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
  const handleEditItem = async (formData) => {
    await editItemCall({
      dtoIn: { id: dataItem.id, updatedData: formData },
      successMessage: "Položka byla upravena.",
      errorMessage: "Úprava selhala.",
      successCallback: () => {
        load();
        onClose();
      },
    });
  };
  const handleDeleteItem = async (id) => {
    await deleteItemCall({
      dtoIn: id,
      successMessage: "Položka byla úspěšně smazána",
      errorMessage: "Chyba při mazání položky",
      successCallback: async () => {
        await load();
      },
    });
  };

  const onClose = () => {
    setCreateModal({ open: false });
    setEditModal({ open: false });
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
            collapsed: true,
          },
          {
            label: "Edit",
            onClick: async () => {
              const item = await loadOneItem(row.id);
              if (item) setEditModal({ open: true });
            },
            confirm: false,
            collapsed: false,
          },
        ],
      };
    });
  }, [data, handleDeleteItem]);

  console.log(tableData)

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
      dataItem,
      alert,
      error,
      modals: { createModal, setCreateModal, editModal, setEditModal },
      reload: load,
      onClose: onClose,
      handleCreateItem,
      handleEditItem,
    }),
    [data, error, createModal, alert, tableData, editModal, dataItem]
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
