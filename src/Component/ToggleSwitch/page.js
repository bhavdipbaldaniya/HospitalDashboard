import React from "react";
import style from "./toggle.module.css";

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <>
      <label className={style.toggleSwitch}>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className={style.slider}></span>
      </label>
    </>
  );
};

export default ToggleSwitch;
