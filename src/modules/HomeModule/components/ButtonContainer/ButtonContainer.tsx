import React from "react";
import "./ButtonContainer.scss";
export const ButtonContainer: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <div className="button-container">{children}</div>;
};
