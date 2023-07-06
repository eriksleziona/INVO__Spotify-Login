import React from "react";
import "./ThirdPartyButton.style.scss";
import { IThirdPartyButton } from "./ThirdPartyButton.types";
export const ThirdPartyButton: React.FC<IThirdPartyButton> = ({
  icon,
  company,
}) => {
  let classNames = "btn";

  if (company.toLocaleLowerCase() === "facebook") {
    classNames = "btn btn-facebook";
  }

  if (company.toLocaleLowerCase() === "apple") {
    classNames = "btn btn-apple";
  }

  if (company.toLocaleLowerCase() === "google") {
    classNames = "btn btn-google";
  }
  return (
    <button type="button" className={classNames}>
      <span>{icon}</span>Sign up with {company}
    </button>
  );
};
