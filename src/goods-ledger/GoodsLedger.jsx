//@@viewOn:imports
import React from "react";
import Table from "../components/table/Table";
import Modal from "../components/simply-components/Modal";
//@@viewOff:imports

//@@viewOn:constants
const tableData = [
  {
    id: 1,
    name: "Product 1",
    quantity: 10,
    price: 100,
    date: "2023-01-01",
    actionList: [
      { label: "Edit", onClick: (row) => alert(`Edit ${row.name}`) },
      { label: "Delete", onClick: (row) => alert(`Delete ${row.name}`), collapsed: true },
      { label: "Duplicate", onClick: (row) => alert(`Duplicate ${row.name}`), collapsed: true },
    ],
  },
  {
    id: 2,
    name: "Product 2",
    quantity: 20,
    price: 200,
    date: "2023-02-01",
    actionList: [
      { label: "View", onClick: (row) => alert(`View ${row.name}`) },
      { label: "Archive", onClick: (row) => alert(`Archive ${row.name}`), collapsed: true },
      { label: "Archive", onClick: (row) => alert(`Archive ${row.name}`), collapsed: true },
      { label: "Archive", onClick: (row) => alert(`Archive ${row.name}`), collapsed: true },
      { label: "Archive", onClick: (row) => alert(`Archive ${row.name}`), collapsed: true },
      
    ],
  },
];


const columnsDefinition = [
  { Header: "ID", key: "id" },
  { Header: "Name", key: "name" },
  { Header: "Quantity", key: "quantity" },
  { Header: "Price", key: "price", cell: (row) => `${row.price} EUR`, },
  { Header: "Date", key: "date" },

];
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

function GoodsLedger() {
  //@@viewOn:render
  return (
    <div>
      <Table data={tableData} columnsDefinition={columnsDefinition} />
  <Modal
        open={false}
        onClose={() => {}}
        header="Goods Ledger"
        content={<div>Content goes here</div>}
       footer={<div>Footer goes here</div>}
        showCloseButton={true}
        showSubmitButton={false}
      />
    </div>
  );
  //@@viewOff:render
}

export default GoodsLedger;
