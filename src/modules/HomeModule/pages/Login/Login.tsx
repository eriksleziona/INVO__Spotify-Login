import React from "react";
import { ThirdPartyButton, Title } from "@/global-components";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./Login.style.scss";
import { ButtonContainer, Separator } from "../../components";
export const Login = () => {
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
    </main>
  );
};
