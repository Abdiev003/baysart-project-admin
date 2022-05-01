import React from "react";

import "./button.css";

const Button = ({
  color,
  backgroundColor,
  width,
  height,
  boxShadow,
  borderRadius,
  text,
  align,
  img,
  padding,
  margin,
  display,
}) => {
  return (
    <div
      className={`text-center text-lg-${align} text-md-center mt-5 position-relative`}
    >
      {img && <img className="btn-img" src={img} alt="" />}
      <button
        style={{
          color: color,
          backgroundColor: backgroundColor,
          width: width,
          height: height,
          boxShadow: boxShadow,
          borderRadius: borderRadius,
          padding: padding,
          margin,
          display,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
