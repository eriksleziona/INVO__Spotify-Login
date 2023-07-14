import React, { ChangeEvent } from "react";
import "./RegisterForm.style.scss";
import {
  FormRow,
  GenderForm,
  Acknowledgement,
  SubmitButton,
  FormDateRow,
} from "@/modules/HomeModule/components";

export const RegisterForm: React.FC = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("submit");
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    console.log(e.target.value);
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
          handleChange={handleChange}
        />
        <FormRow
          type="email"
          name="confirmemail"
          labelText="Confirm your email"
          placeholderText="Enter your email again."
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          labelText="Create a password"
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          name="username"
          labelText="What should we call you?"
          placeholderText="Enter a profile name."
          additionalText="This appears on your profile."
          handleChange={handleChange}
        />
        <FormDateRow handleChange={handleChange} />
        <GenderForm handleChange={handleChange} />
        <Acknowledgement handleChange={handleChange} />
        <p className="register-form-container__conditions">
          By clicking on sign-up. you agree to Sporify’s
          <a href="#" className="register-form-container__conditions-link">
            Terms and Conditions of Use
          </a>
          .
        </p>
        <p className="register-form-container__privacy">
          To learn more about how. Spotify collects, uses, shares and protects
          your personal data, please see
          <a href="#" className="register-form-container__privacy-link">
            Spotify’s Privacy Policy
          </a>
          .
        </p>
        <div className="register-form-container__btn">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};
