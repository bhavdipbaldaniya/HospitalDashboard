import React from "react";
import style from "./button.module.css";
const Button = ({ text, disabled, className, onClick }) => {
  return (
    <>
      <button
        className={`${style.main_div_button} ${className}`}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
