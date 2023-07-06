import React from "react";
import { FormRow } from "../FormRow/FormRow";

export const LoginForm: React.FC = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("Submit");
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.target);
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-container__form">
        <FormRow
          type="text"
          name="email"
          labelText="Email address or username"
          handleChange={handleChange}
        />
      </form>
    </div>
  );
};
