import React from "react";
import { ITitle } from "./Title.types";
import "./Title.style.scss";
export const Title: React.FC<ITitle> = ({ msg }) => {
  return (
    <div className="title-container">
      <h2 className="title-container__heading">{msg}</h2>
    </div>
  );
};
