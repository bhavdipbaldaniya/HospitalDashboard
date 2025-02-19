import React from "react";

const Heading = ({ text, className }) => {
  return <p className={`Heading ${className}`}>{text}</p>;
};

export default Heading;
