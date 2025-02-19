import { BackArrow } from "@/src/Utils/svg";
import React from "react";

const BackButton = ({ text, className, onClick }) => {
  return (
    <>
      <button
        className={`flex border rounded-[--radius] border-[--border_colours_light_border] items-center text-[--primar_colours_dark_green] gap-2 py-[5px] px-2 text-base/[21.79px]  ${className}`}
        onClick={onClick}
      >
        <div className="pl-1 py-1">{BackArrow.icon()}</div>
        {text}
      </button>
    </>
  );
};

export default BackButton;
