import React from "react";
import "./genderForm.style.scss";
import { genders } from "./genders";
export const GenderForm: React.FC = () => {
  return (
    <div className="gender-form-container">
      <label htmlFor="">What’s your date of birth</label>
      <fieldset name="gender" className="gender-form-container__group">
        {genders.map((gender) => {
          return (
            <div key={gender} className="gender-form-container__radio">
              <input type="radio" name="gender" id={gender} value={gender} />
              <label htmlFor="gender">{gender}</label>
            </div>
          );
        })}
      </fieldset>
    </div>
  );
};
