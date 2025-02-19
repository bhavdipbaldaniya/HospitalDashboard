import React from "react";

const SubHeading = ({ text, className }) => {
  return <p className={`SubHeading ${className}`}>{text}</p>;
};

export default SubHeading;
