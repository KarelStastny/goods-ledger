

//@@viewOn:imports
import React from "react";
import Form from "../components/simply-components/Form";
//@@viewOff:imports

//@@viewOn:constants
const fields = [
  { name: "name", label: "Název produktu", placeholder: "Zadej název" },
  { name: "quantity", label: "Množství", type: "number", defaultValue: 1 },
  { name: "price", label: "Cena", type: "number" },
];
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

function CreateForm() {
  const handleSubmit = (data) => {
    console.log("Odesláno:", data);
    // sem později přidáš volání Firebase, validace, modaly, atd.
  };

  //@@viewOn:render
  return (
    <div>
      <h2>Vytvořit položku</h2>
      <Form fields={fields} onSubmit={handleSubmit} />
    </div>
  );
  //@@viewOff:render
}

export default CreateForm;
