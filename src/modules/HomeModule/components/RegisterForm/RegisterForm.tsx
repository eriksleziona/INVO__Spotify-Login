import React, { FormEvent } from "react";
import "./RegisterForm.style.scss";
import { FormRow, GenderForm } from "@/modules/HomeModule/components";

const RegisterForm: React.FC = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
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
        <div>Placeholder Date Row</div>
        <GenderForm />
      </form>
    </div>
  );
};
export default RegisterForm;
