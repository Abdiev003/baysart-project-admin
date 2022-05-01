import React from "react";
import "./input.css";

const Input = ({
  width,
  height,
  radius,
  label,
  id,
  name,
  placeholder,
  type,
  value,
  onChange,
  isRequired,
  display,
  icon,
}) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}

      <div className="input-search">
        <input
          type={type}
          placeholder={placeholder}
          required={isRequired}
          name={name}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          style={{ width: width, height: height, borderRadius: radius }}
          className="input"
        />
        <img src={icon} alt="" style={{ display: display }} />
      </div>
    </div>
  );
};

export default Input;
