import React from "react";
import style from "./SvgButton.module.css";

const SvgButton = ({ onClick, disabled, type, text, className, svg }) => {
  return (
    <button
      className={`${className} ${style.defult_button}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <div className={style.ButtonIcon}>
        {svg && <div className={style.svgIcon}>{svg}</div>}
        <span className={`${className} ${style.buttonText}`}>{text}</span>
      </div>
    </button>
  );
};

export default SvgButton;
