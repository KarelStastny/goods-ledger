//@@viewOn:imports
import React, { useState } from "react";
import GoodsProvider, { useGoods } from "./Provider"; // importuj hook
import Table from "../components/table/Table";
import Modal from "../components/simply-components/Modal";
import CreateForm from "./CreateForm";
//@@viewOff:imports

//@@viewOn:constants
const columnsDefinition = [
  { Header: "ID", key: "id" },
  { Header: "Name", key: "name" },
  { Header: "Quantity", key: "quantity" },
  { Header: "Price", key: "price", cell: (row) => `${row.price} EUR` },
  { Header: "Date", key: "date" },
];
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

function GoodsLedger() {
  // const { data, state, error } = useGoods();
  const [createModal, setCreateModal] = useState({ open: false });

  // if (state === "pending") return <div>Načítám...</div>;
  // if (state === "error") return <div>Chyba: {error.message}</div>;

  //@@viewOn:render
  return (
    <div>
      <GoodsProvider>
        {({ data }) => {
          console.log(data);
          return (
            <div>
              <Table
                data={data}
                columnsDefinition={columnsDefinition}
                layout="default"
                blockActions={[
                  {
                    label: "Test",
                    onClick: () => setCreateModal({ open: true }),
                  },
                ]}
              />
              <Modal
                open={createModal.open}
                onClose={() => setCreateModal({ open: false })}
                header="Create New Entry"
                content={<CreateForm />}
                footer={<div>Footer goes here</div>}
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
