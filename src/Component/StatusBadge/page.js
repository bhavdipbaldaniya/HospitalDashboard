import React from "react";
import style from "./StatusBadge.module.css";

const StatusBadge = ({ text, color }) => {
  return (
    <div
      className={style.badge}
      style={{ backgroundColor: `${color}20`, color }}
    >
      <span className={style.dot} style={{ backgroundColor: color }}></span>
      {text}
    </div>
  );
};

export default StatusBadge;
