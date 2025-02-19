import React from "react";

const Small = ({ text, className, onClick }) => {
  return (
    <p className={`Small ${className}`} onClick={onClick}>
      {text}
    </p>
  );
};

export default Small;
