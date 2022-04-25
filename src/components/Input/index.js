import React from "react";
import "./input.css";
import Search from "../../assets/images/search.svg";

const Input = ({
  label,
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
          className="input"
        />
        <img src={Search} alt="" style={{ display: display }} />
      </div>
    </div>
  );
};

export default Input;
