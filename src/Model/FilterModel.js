import React from "react";
import style from "./FeedbackModel.module.css";
import { Ic_Cross } from "../Utils/svg";
import Heading from "../Typography/text/Heading";
import Button from "../Component/Button/page";

const FilterModel = ({
  isOpen,
  onClose,
  children,
  text,
  disabled,
  ResetClick,
  ApplyClick,
}) => {
  return (
    <div
      className={`${style.modalOverlay_Filter} ${isOpen ? style.open : ""} `}
    >
      <div
        className={`${style.modalContent} ${
          isOpen ? style.open : ""
        } !bg-white overflow-hidden`}
      >
        <div className="py-5 px-[42px] flex justify-between bg-white border-[#D1D5D8] border-b border-[--border_colours_light_border]">
          <Heading className="" text={text} />
          <button onClick={onClose}>{Ic_Cross.icon()}</button>
        </div>
        {children}
        <div className="bg-[#F3F4F6] flex justify-between  px-[39px] pb-[21px] pt-[21px] border-[#D1D5D8] border-t border-[--border_colours_light_border]">
          <Button
            className=" px-4 !max-w-[75px] !rounded-lg max-h-[32px] !bg-white !text-[#003B3E] !font-normal !border-2 !border-[#D1D5D8]-500/100"
            type={"submit"}
            text={"Reset"}
            disabled={disabled}
            onClick={ResetClick}
          />
          <Button
            onClick={ApplyClick}
            className=" px-4 !max-w-[75px] !rounded-lg max-h-[32px] !font-normal"
            type={"submit"}
            text={"Apply"}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterModel;
