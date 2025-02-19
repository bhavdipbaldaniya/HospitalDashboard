// "use client";
// import React from "react";
// import style from "./Search.module.css";

// const SearchInput = ({ placeholder, value, setValue, className, svg }) => {
//   return (
//     <div className={`${style.inputContainer} ${className}`}>
//       {svg && <span className={style.icon}>{svg}</span>}
//       <input
//         type="search"
//         className={style.Search_Input}
//         placeholder={placeholder || "Search..."}
//         value={value}
//         onChange={(e) => e.target.value}
//         autoComplete="off"
//       />
//     </div>
//   );
// };

// export default SearchInput;

"use client";
import React from "react";
import style from "./Search.module.css";

const SearchInput = ({ placeholder, value, onChange, className, svg }) => {
  return (
    <div className={`${style.inputContainer} ${className}`}>
      {svg && <span className={style.icon}>{svg}</span>}
      <input
        type="search"
        className={style.Search_Input}
        placeholder={placeholder || "Search..."}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
      />
    </div>
  );
};

export default SearchInput;
