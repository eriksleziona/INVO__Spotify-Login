import React from "react";
import { ThirdPartyButton, Title } from "@/global-components";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./Login.style.scss";
import { ButtonContainer, Separator, LoginForm } from "../../components";
import { Link } from "react-router-dom";
export const Login: React.FC = () => {
  return (
    <main className="login-container">
      <Title msg="Spotify" />
      <ButtonContainer>
        <p className="login-container__subtitle">
          Please sign in to Spotify to continue.
        </p>
        <ThirdPartyButton icon={<FaFacebook />} company="Facebook" />
        <ThirdPartyButton icon={<FaApple />} company="Apple" />
        <ThirdPartyButton icon={<FcGoogle />} company="google" />
      </ButtonContainer>
      <Separator fullWidth={false} />
      <LoginForm />
      <Separator fullWidth={true} />
      <div className="login-container__footer">
        <h3 className="login-container__sign-title">
          You dont have an account yet?
        </h3>
        <Link to={"/register"} className="login-container__btn-sign">
          Sign up for spotify
        </Link>
      </div>
    </main>
  );
};
