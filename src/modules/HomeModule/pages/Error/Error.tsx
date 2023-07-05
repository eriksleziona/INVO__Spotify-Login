/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import "./Error.style.scss";
import img from "@/assets/images/404_error.svg";
export const Error: React.FC = () => {
  return (
    <div className="error-page-container">
      <img className="error-page-container__image" src={img} alt="not found" />
      <h2>We couldn't find the page you're looking for.</h2>
      <Link to={"/"} className="error-page-container__link">
        Back Home
      </Link>
    </div>
  );
};
