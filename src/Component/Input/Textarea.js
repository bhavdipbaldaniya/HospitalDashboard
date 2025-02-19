import React from "react";
import style from "./textarea.module.css";
import { Ic_FileUploadSuccess } from "@/src/Utils/svg";

const Textarea = ({
  type = "text",
  placeholder,
  value,
  setValue,
  name,
  onBlur,
  disable,
  className,
  onChange,
  svg,
}) => {
  const handleChange = (e) => {
    if (type === "number" && isNaN(e.target.value)) return;

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`${style.inputContainer} ${className}`}>
      <>
        {svg && <span className={style.icon}>{svg}</span>}
        <textarea
          type={type}
          className={`${style.input} noSpinner ${className}`}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          disabled={disable}
          autoComplete="off"
          pattern={type === "email" ? "^[^s@]+@[^s@]+.[^s@]+$" : undefined}
          onKeyDown={(e) => {
            if (e.key === "ArrowUp" || e.key === "ArrowDown") {
              e.preventDefault();
            }
          }}
        />
      </>
    </div>
  );
};

export default Textarea;
