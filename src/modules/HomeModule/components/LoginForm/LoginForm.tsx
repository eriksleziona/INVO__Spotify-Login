import React from "react";
import { FormRow } from "../FormRow/FormRow";
import "./LoginForm.scss";
import { SubmitButton } from "../SubmitButton/SubmitButton";
export const LoginForm: React.FC = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("Submit");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
  };
  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form-container__form">
        <FormRow
          type="text"
          name="email"
          labelText="Email address or username"
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          labelText="Password"
          handleChange={handleChange}
          additionalText=" Do not you remember the password?"
        />
        <div className="login-form-container__RememberAndSubmit">
          <div className="login-form-container__remember">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              onChange={handleChange}
            />
            <label htmlFor="remember">Remember</label>
          </div>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};
