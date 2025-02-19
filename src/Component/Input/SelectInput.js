import { Ic_Down } from "@/src/Utils/svg";
import React, { useState } from "react";

const SelectInput = ({ placeholder, options, svg, onChange }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (option) => {
    setSelectedValue(option);
    setShowDropdown(false); // Close dropdown
    if (onChange) onChange(option); // Pass value to parent if needed
  };

  return (
    <div className="relative w-full">
      {/* Select Input Box */}
      <div
        className="flex min-h-12 items-center border border-[--border_colours_light_border] rounded-lg p-2 cursor-pointer bg-[--surface_colours_light_gray_surf] px-4 py-3 text-sm"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {svg && <span className="mr-2">{svg}</span>}
        {placeholder && selectedValue ? (
          ""
        ) : (
          <span className="flex text-[#6B7280]">{placeholder}</span>
        )}
        <span className="flex-1">{selectedValue}</span>
        <span className="ml-2">{Ic_Down.icon()}</span>{" "}
        {/* Dropdown Indicator */}
      </div>

      {/* Dropdown Options */}
      {showDropdown && (
        <div className="absolute left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg z-10">
          {options &&
            options.map((option, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SelectInput;
