import React from "react";

function Dropdown({ name, value, onChange, itemList = [], style = {} }) {
  return (
    <select name={name} value={value} onChange={onChange} style={style}>
      {itemList.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label || item.value}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
