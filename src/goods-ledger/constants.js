export const formCreateItems = [
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
  {
    name: "type",
    label: "Typ",
    type: "dropdown",
    itemList: [
      { value: null, label: null },
      { value: "3d", label: "3D" },
      { value: "stavebnice", label: "Stavebnice" },
      { value: "figurky", label: "Figurky" },
    ],
  },
  {
    name: "description",
    label: "Popis produktu",
    type: "textArea",
    required: false,
  },
];

export const formEditItems = [
  {
    name: "saleStart",
    label: "Zahájení prodeje",
    type: "dropdown",
    itemList: [
      { value: null, label: null },
      { value: true, label: "Aktivní" },
      { value: false, label: "Neaktivní" },
    ],
  },
  {
    name: "goodsArrived",
    label: "Zboží Dorazilo",
    type: "dropdown",
    itemList: [
      { value: null, label: null },
      { value: true, label: "Ano" },
      { value: false, label: "Ne" },
    ],
  },
];
