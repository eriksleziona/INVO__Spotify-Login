import React from "react";
import { IFormRow } from "./FormRow.types";
import "./FormRow.style.scss";
export const FormRow: React.FC<IFormRow> = ({
  type,
  labelText,
  name,
  additionalText,
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
        placeholder={labelText}
      />
      {additionalText && (
        <p className="form-row-container__additional">
          Do not you remember the password?
        </p>
      )}
    </div>
  );
};
