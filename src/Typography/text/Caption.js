import React from "react";

const Caption = ({ text, className }) => {
  return <p className={`Caption ${className}`}>{text}</p>;
};

export default Caption;
