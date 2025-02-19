import React from "react";
import style from "./input.module.css";
import { Ic_FileUploadSuccess } from "@/src/Utils/svg";

const Input = ({
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
  filename,
  className1,
}) => {
  const handleChange = (e) => {
    if (type === "number" && isNaN(e.target.value)) return;

    if (onChange) {
      onChange(e);
    } else if (setValue) {
      setValue(e.target.files ? e.target.files[0] : e.target.value);
    }
  };

  return (
    <div className={`${style.inputContainer} ${className}`}>
      {type === "file" ? (
        <label className={style.fileUpload}>
          <input
            type="file"
            name={name}
            onChange={handleChange}
            onBlur={onBlur}
            disabled={disable}
            className={style.hiddenInput}
            filename={filename}
          />
          <div className={style.fileDisplay}>
            <div
              className={`${className1} flex items-center gap-3 text-[ #333]`}
            >
              {svg && <span className={style.icon}>{svg}</span>}
              <span>{value ? value.name : `${filename}`}</span>
            </div>
            {value && (
              <span className={style.uploadIcon}>
                {Ic_FileUploadSuccess.icon()}
              </span>
            )}
          </div>
        </label>
      ) : (
        <>
          {svg && <span className={style.icon}>{svg}</span>}
          <input
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
      )}
    </div>
  );
};

export default Input;
