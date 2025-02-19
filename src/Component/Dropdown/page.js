import { useState, useRef, useEffect } from "react";
import style from "./Dropdown.module.css";
import { Ic_DropdownDark } from "@/src/Utils/svg";

const Dropdown = ({ data, value, setValue, className, disable, Select }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    if (!disable) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option) => {
    setValue(option.value);
    setIsOpen(false);
  };

  const filteredData = data?.filter(
    (option) =>
      option.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      option.value.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div
      ref={selectRef}
      className={`${style.SelectMain} ${className} ${
        disable ? style.disable : ""
      }`}
    >
      <div className={style.SelectSubMain} onClick={toggleDropdown}>
        <span
          className={`${style.Select} ${className} ${
            value ? style.selectedText : ""
          }`}
        >
          {value
            ? data.find((option) => option.value === value)?.name || Select
            : Select}
        </span>
        <span>{Ic_DropdownDark.icon()}</span>
      </div>

      {isOpen && (
        <div
          className={style.OpenSelectMain}
          onClick={(e) => e.stopPropagation()}
        >
          <input
            className={style.search}
            type="search"
            placeholder={"Search"}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div>
            {filteredData?.map((option) => (
              <div
                key={option.value}
                className={`${style.MainForOptionSelected} ${
                  value === option.value ? style.SelectedDropdownOption : ""
                }`}
                onClick={() => handleSelect(option)}
              >
                <div>{option.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
