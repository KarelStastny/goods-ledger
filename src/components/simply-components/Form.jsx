//@@viewOn:imports
import React, { useState } from "react";
import COLORS from "../styles/palette";
import Dropdown from "./Dropdown";
//@@viewOff:imports

//@@viewOn:css
const Css = {
  form: {
    width: "100%",
    padding: "24px",
    backgroundColor: COLORS.surface,
    color: COLORS.textPrimary,
    boxSizing: "border-box",
  },
  fieldWrapper: {
    marginBottom: "16px",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: "bold",
    color: COLORS.textSecondary,
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: `1px solid ${COLORS.border}`,
    backgroundColor: COLORS.surface,
    color: COLORS.textPrimary,
    outline: "none",
    appearance: "none", // pro Firefox
    WebkitAppearance: "none", // pro Chrome/Safari
    MozAppearance: "none", // pro starší Firefox
  },

  submitButton: {
    padding: "10px 16px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: COLORS.primary,
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

function Form({ fields = [], onSubmit, initialValues }) {
  const [formData, setFormData] = useState(() => {
    const base = fields.reduce(
      (acc, field) => ({ ...acc, [field?.name]: field.defaultValue || "" }),
      {}
    );
    return { ...base, ...initialValues };
  });

  const handleChange = (e, name) => {
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit?.(formData);
    } catch (err) {
      console.error("Chyba při odeslání formuláře:", err);
    }
  };

  //@@viewOn:render
  return (
    <form onSubmit={handleSubmit} style={Css.form}>
      {fields.map((field) => {
        const fieldValue = formData[field.name] || "";

        if (field.type === "dropdown") {
          return (
            <div key={field.name} style={Css.fieldWrapper}>
              <label style={Css.label}>{field.label}</label>
              <Dropdown
                name={field.name}
                value={fieldValue}
                onChange={(e) => handleChange(e, field.name)}
                itemList={field.itemList}
                style={Css.input}
              />
            </div>
          );
        }

        return (
          <div key={field.name} style={Css.fieldWrapper}>
            <label style={Css.label}>{field.label}</label>
            <input
              type={field.type || "text"}
              value={fieldValue}
              onChange={(e) => handleChange(e, field.name)}
              placeholder={field.placeholder}
              required={field.required}
              style={Css.input}
            />
          </div>
        );
      })}
      <button type="submit" style={Css.submitButton}>
        Odeslat
      </button>
    </form>
  );
  //@@viewOff:render
}

export default Form;
