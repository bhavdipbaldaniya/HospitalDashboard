import React, { useState } from "react";

const MultiSelectInput = ({ servicesList }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const addService = (service) => {
    if (!selectedServices.includes(service)) {
      setSelectedServices([...selectedServices, service]);
    }
    setShowDropdown(false); // Hide dropdown after selection
  };

  const removeService = (service) => {
    setSelectedServices(selectedServices.filter((item) => item !== service));
  };

  return (
    <div className="relative w-full max-h-[52px]">
      {/* Input Box with Selected Services */}
      <div
        className="w-full flex flex-wrap items-center gap-2 border border-gray-300 rounded-lg px-2 bg-gray-100 cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {selectedServices.map((service, index) => (
          <span
            key={index}
            className="flex items-center bg-white px-3 py-1 rounded-full shadow-md text-sm"
          >
            {service}
            <button
              className="ml-2 text-gray-500 hover:text-red-500"
              onClick={(e) => {
                e.stopPropagation();
                removeService(service);
              }}
            >
              ✕
            </button>
          </span>
        ))}
        <input
          type="text"
          className="flex-1 bg-transparent outline-none text-sm"
          placeholder={selectedServices.length ? "" : "Select services"}
          readOnly
        />
      </div>

      {/* Dropdown List */}
      {showDropdown && (
        <div className="absolute left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg z-10">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => addService(service)}
            >
              {service}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectInput;
