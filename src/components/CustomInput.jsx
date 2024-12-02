import React from "react";
import "./CustomInput.scss";

export default function CustomIput({ label, value, onChange }) {
  return (
    <div className="custom-input-container">
      <input
        type="text"
        className="custom-input"
        onChange={(e) => onChange(e)}
      />
      {label ? (
        <label className={`${value.lenght ? "shrink" : ""} custom-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
}
