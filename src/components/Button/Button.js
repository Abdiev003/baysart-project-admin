import React from "react";

const Button = ({
  color,
  backgroundColor,
  width,
  height,
  boxShadow,
  borderRadius,
  text,
}) => {
  return (
    <div className="text-center text-lg-end text-md-center mt-5">
      <button
        style={{
          color: color,
          backgroundColor: backgroundColor,
          width: width,
          height: height,
          boxShadow: boxShadow,
          borderRadius: borderRadius,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
