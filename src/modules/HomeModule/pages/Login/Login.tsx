import React from "react";
import { ThirdPartyButton, Title } from "@/global-components";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./Login.style.scss";
export const Login = () => {
  return (
    <main className="login-container">
      <Title msg="Spotify" />
      <ThirdPartyButton icon={<FaFacebook />} company="Facebook" />
      <ThirdPartyButton icon={<FaApple />} company="Apple" />
      <ThirdPartyButton icon={<FcGoogle />} company="google" />
    </main>
  );
};
