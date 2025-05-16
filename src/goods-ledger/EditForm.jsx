import React from 'react'
import Form from '../components/simply-components/Form';

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

const EditForm = ({onSubmit, dataItem}) => {
  return (
    <div>
      <Form fields={fields} onSubmit={onSubmit} initialValues={dataItem} />
    </div>
  )
}

export default EditForm
