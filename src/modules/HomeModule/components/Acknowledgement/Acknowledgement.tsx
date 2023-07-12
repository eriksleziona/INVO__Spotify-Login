import React from "react";
import { IAcknowledgement } from "./Acknowledgement.types";
import "./Acknowledgement.style.scss";
export const Acknowledgement: React.FC<IAcknowledgement> = ({
  handleChange,
}) => {
  return (
    <div className="acknowledgement-container">
      <input
        type="checkbox"
        name="acknowledgement"
        id="acknowledgement"
        onChange={handleChange}
        className="acknowledgement-container"
      />
      <label htmlFor="acknowledgement" className="">
        Share my registration date with Spotify’s content providers for
        marketing purposes.
      </label>
    </div>
  );
};
