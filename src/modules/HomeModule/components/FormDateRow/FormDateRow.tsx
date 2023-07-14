import React from "react";
import "./FormDateRow.style.scss";
import { months } from "./months";
import { IFormDateRow } from "./FormDateRow.types";
export const FormDateRow: React.FC<IFormDateRow> = ({ handleChange }) => {
  return (
    <div className="form-date-row-container">
      <p>What’s your date of birth</p>
      <div className="form-date-row-container__row">
        <div className="form-date-row-container__row-item">
          <label htmlFor="month">Month</label>
          <div className="form-date-row-container__select">
            <select
              name="month"
              id="month"
              className="form-date-row-container__month"
              onChange={handleChange}
            >
              <option selected hidden value="">
                Month
              </option>
              {months.map((month) => {
                return (
                  <option key={month} value={month}>
                    {month}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="form-date-row-container__row-item">
          <label htmlFor="day">Day</label>
          <input
            type="text"
            placeholder="DD"
            name="day"
            id="day"
            className="form-date-row-container__day-year"
          />
        </div>
        <div className="form-date-row-container__row-item">
          <label htmlFor="year">Year</label>
          <input
            type="text"
            name="year"
            id="year"
            className="form-date-row-container__day-year"
            placeholder="YYY "
          />
        </div>
      </div>
    </div>
  );
};
