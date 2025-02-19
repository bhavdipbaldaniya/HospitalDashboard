import React from "react";

const Large = ({ text, className }) => {
  return <p className={`Large ${className}`}>{text}</p>;
};

export default Large;
