import React from "react";
import "./Separator.style.scss";
import { ISeparator } from "./Separator.type";
export const Separator: React.FC<ISeparator> = ({ fullWidth }) => {
  return (
    <>
      {fullWidth ? (
        <div className="separator-longline"></div>
      ) : (
        <div className="separator-container">
          <div className="separator-container__line"></div>
          <div className="separator-container__text">or</div>
          <div className="separator-container__line"></div>
        </div>
      )}
    </>
  );
};
