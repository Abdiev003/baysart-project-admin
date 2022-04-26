import React from "react";
import "./input-auth.css";

import Mail from "../../assets/images/mail.svg";

const InputAuth = ({
  width,
  height,
  margin,
  radius,
  label,
  padding,
  id,
  name,
  placeholder,
  type,
  value,
  onChange,
  isRequired,
  display,
}) => {
  return (
    <div className="signinauth-input">
      {label && <label htmlFor={name}>{label}</label>}

      <input
        type={type}
        placeholder={placeholder}
        required={isRequired}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        style={{
          width: width,
          height: height,
          borderRadius: radius,
          padding: padding,
          marginBottom: margin
        }}
        className="input"
      />
      <img src={Mail} alt="" style={{ display: display }} />
    </div>
  );
};

export default InputAuth;
