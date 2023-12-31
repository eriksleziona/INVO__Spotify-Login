import { ThirdPartyButton, Title } from "@/global-components";
import "./Register.style.scss";
import React from "react";
import { ButtonContainer, Separator, RegisterForm } from "../../components";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
export const Register: React.FC = () => {
  return (
    <main className="register-container">
      <Title msg="Spotify" />
      <p className="register-container__subtitle">
        Sign up for free to start listening.
      </p>
      <ButtonContainer>
        <ThirdPartyButton icon={<FaFacebook />} company="facebook" />
        <ThirdPartyButton icon={<FcGoogle />} company="google" />
      </ButtonContainer>
      <Separator fullWidth={false} />
      <RegisterForm />
      <p className="register-container__footer">
        Have an account? <Link to={"/"}>Log in</Link>.
      </p>
    </main>
  );
};
