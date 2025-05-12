//@@viewOn:imports
import React, { useState } from "react";
import GoodsProvider, { useGoods } from "./Provider"; // importuj hook
import Table from "../components/table/Table";
import Modal from "../components/simply-components/Modal";
import CreateForm from "./CreateForm";
import { renderers } from "../components/tools/renderers";
//@@viewOff:imports

//@@viewOn:constants
const columnsDefinition = [
  { Header: "Date", key: "buyDate" },
  { Header: "ID", key: "id", cell:(row) => renderers.tooltip(row.id, 3) },
  { Header: "Name", key: "name" },
  { Header: "Quantity", key: "quantity" },
  { Header: "Nákupní cena", key: "buyPrice", cell: (row) => `${row.buyPrice} Kč` },
  { Header: "description", key: "description" },
  { Header: "Zahájení prodeje", key: "saleStartDate" },
];
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

function GoodsLedger() {
  // const { data, state, error } = useGoods();

  // if (state === "pending") return <div>Načítám...</div>;
  // if (state === "error") return <div>Chyba: {error.message}</div>;

  //@@viewOn:render
  return (
    <div>
      <GoodsProvider>
        {({
          data,
          reload,
          createModal,
          setCreateModal,
          onClose,
          handleSubmitCreateButton,
        }) => {
          console.log(data);
          return (
            <div>
              <Table
                data={data}
                columnsDefinition={columnsDefinition}
                layout="default"
                header="Seznam všech položek"
                blockActions={[
                  {
                    label: "Vytvořit novou položku",
                    onClick: () => setCreateModal({ open: true }),
                  },
                ]}
              />
              <Modal
                open={createModal.open}
                onClose={() => onClose()}
                header="Vytvořit novou položku"
                content={
                  <CreateForm
                    reload={reload}
                    onClose={() => onClose()}
                    handleSubmitCreateButton={handleSubmitCreateButton}
                  />
                }
                showCloseButton={true}
                showSubmitButton={false}
              />
            </div>
          );
        }}
      </GoodsProvider>
    </div>
  );
  //@@viewOff:render
}

export default GoodsLedger;
