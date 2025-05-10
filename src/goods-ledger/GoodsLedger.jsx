//@@viewOn:imports
import React from "react";
import Table from "../components/table/Table";
//@@viewOff:imports

//@@viewOn:constants
const tableData = [
  {
    id: 1,
    name: "Product 1",
    quantity: 10,
    price: 100,
    date: "2023-01-01",
  },
  {
    id: 2,
    name: "Product 2",
    quantity: 20,
    price: 200,
    date: "2023-02-01",
  },
  {
    id: 3,
    name: "Product 3",
    quantity: 30,
    price: 300,
    date: "2023-03-01",
  },
];

const columnsDefinition = [
  { Header: "ID", accessor: "id" },
  { Header: "Name", accessor: "name" },
  { Header: "Quantity", accessor: "quantity" },
  { Header: "Price", accessor: "price" },
  { Header: "Date", accessor: "date" },
];
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

function GoodsLedger() {
  //@@viewOn:render
  return (
    <div>
      <Table data={tableData} columnsDefinition={columnsDefinition} />
    </div>
  );
  //@@viewOff:render
}

export default GoodsLedger;
