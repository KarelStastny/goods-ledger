//@@viewOn:imports
import React from "react";
import { createItem } from "./firebase/calls";
import Form from "../components/simply-components/Form";
//@@viewOff:imports

//@@viewOn:constants
const fields = [
  { name: "buyDate", label: "Datum nákupu", type: "date" },
  {
    name: "name",
    label: "Název produktu",
    placeholder: "Zadej název",
    required: true,
  },
  {
    name: "quantity",
    label: "Množství",
    type: "number",
    defaultValue: 1,
    required: true,
  },
  { name: "buyPrice", label: "Nákupní cena", type: "number", required: true },
  { name: "description", label: "Popis produktu", type: "textArea", required: false },
  { name: "saleStartDate", label: "Zahájení prodeje", type: "date" },
];

//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

function CreateForm({ handleSubmitCreateButton }) {


  //@@viewOn:render
  return (
    <div>
      <Form fields={fields} onSubmit={handleSubmitCreateButton} />
    </div>
  );
  //@@viewOff:render
}

export default CreateForm;
