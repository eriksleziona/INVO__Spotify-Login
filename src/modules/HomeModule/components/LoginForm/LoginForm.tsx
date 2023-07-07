import React from "react";
import { FormRow } from "../FormRow/FormRow";
import "./LoginForm.scss";
export const LoginForm: React.FC = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("Submit");
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.target);
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
      </form>
    </div>
  );
};
