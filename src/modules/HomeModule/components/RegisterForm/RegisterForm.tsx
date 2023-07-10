import React from "react";
import "./RegisterForm.style.scss";
import { FormRow } from "../FormRow/FormRow";
const RegisterForm: React.FC = () => {
  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="register-form-container">
      <form onSubmit={handleSubmit} className="register-form-container__form">
        <h4 className="register-form-container__title">
          Sign up with your email address
        </h4>
        <FormRow
          type="email"
          name="email"
          labelText="What’s your email?"
          placeholderText="Enter you email."
        />
        <FormRow
          type="email"
          name="confirmemail"
          labelText="Confirm your email"
          placeholderText="Enter your email again."
        />
        <FormRow
          type="password"
          name="password"
          labelText="Create a password"
        />
        <FormRow
          type="text"
          name="username"
          labelText="What should we call you?"
          placeholderText="Enter a profile name."
          additionalText="This appears on your profile."
        />
      </form>
    </div>
  );
};
export default RegisterForm;
