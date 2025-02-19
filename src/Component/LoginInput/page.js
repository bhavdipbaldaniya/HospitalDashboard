import React, { useState } from "react";
import style from "./LoginInput.module.css";

const LoginInput = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [mobileNumber, setMobileNumber] = useState("");

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    const country = countries.find((c) => c.code === countryCode);
    setSelectedCountry(country);
  };

  return (
    <div className={style.inputContainer}>
      <div className={`${style.selectDropdown} ${style.countryDropdown}`}>
        <img
          src={selectedCountry.flag}
          alt={selectedCountry.name}
          className={style.flagIcon}
        />
        <select value={selectedCountry.code} onChange={handleCountryChange}>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.code} ({country.dial_code})
            </option>
          ))}
        </select>
      </div>

      <input
        type="tel"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        placeholder="Enter your mobile number..."
        className={style.mobileInput}
      />
    </div>
  );
};

export default LoginInput;
