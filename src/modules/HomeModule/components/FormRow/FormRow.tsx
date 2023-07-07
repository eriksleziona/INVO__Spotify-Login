import React from "react";
import { IFormRow } from "./FormRow.types";
import "./FormRow.style.scss";
export const FormRow: React.FC<IFormRow> = ({
  type,
  labelText,
  name,
  additionalText,
  handleChange,
}) => {
  return (
    <div className="form-row-container">
      <label className="form-row-container__label" htmlFor={name}>
        {labelText}
      </label>
      <input
        type={type}
        name={name}
        className="form-row-container__input"
        id={name}
        placeholder={labelText}
        onChange={handleChange}
        required
      />
      {additionalText && (
        <p className="form-row-container__additional">
          Do not you remember the password?
        </p>
      )}
    </div>
  );
};
