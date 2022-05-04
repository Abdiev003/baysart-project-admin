import React from "react";


import "./select.css"
const Select = () => {
  return (
    <div className="select">
  
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab" selected>
        English(UK)
        </option>
      </select>
    </div>
  );
};

export default Select;
