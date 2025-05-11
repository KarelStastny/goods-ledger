//@@viewOn:imports
import React, { useState } from "react";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

function Form({ fields = [], onSubmit }) {
  const [formData, setFormData] = useState(() =>
    fields.reduce((acc, field) => ({ ...acc, [field.name]: field.defaultValue || "" }), {})
  );

  const handleChange = (e, name) => {
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  //@@viewOn:render
  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: 4 }}>{field.label}</label>
          <input
            type={field.type || "text"}
            value={formData[field.name]}
            onChange={(e) => handleChange(e, field.name)}
            placeholder={field.placeholder}
            style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
          />
        </div>
      ))}
      <button type="submit">Odeslat</button>
    </form>
  );
  //@@viewOff:render
}

export default Form;
