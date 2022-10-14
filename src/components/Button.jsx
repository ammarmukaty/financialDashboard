import React from "react";

const Button = ({ size, color, bgColor, text, borderRadius }) => {
  return (
    <button
      type="button"
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      style={{ backgroundColor: bgColor, color, borderRadius }}
    >
      {text}
    </button>
  );
};

export default Button;
