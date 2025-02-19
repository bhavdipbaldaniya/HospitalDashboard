import React from "react";
import style from "./FeedbackModel.module.css";
import { Ic_Cross } from "../Utils/svg";
import Heading from "../Typography/text/Heading";
import Button from "../Component/Button/page";

const FeedbackModel = ({ isOpen, onClose, children, text }) => {
  return (
    <div className={`${style.modalOverlay} ${isOpen ? style.open : ""} `}>
      <div
        className={`${style.modalContent} ${
          isOpen ? style.open : ""
        } !bg-[--surface_colours_light_gray_surf] overflow-hidden`}
      >
        <div className="py-5 px-[42px] flex justify-between bg-white border-[#D1D5D8] border-b border-[--border_colours_light_border]">
          <Heading className="" text={text} />
          <button onClick={onClose}>{Ic_Cross.icon()}</button>
        </div>
        {children}
        <div className="bg-[] px-[39px] pb-[39px] pt-[49px]">
          <Button type={"submit"} text={"Okay"} disabled={true} />
        </div>
      </div>
    </div>
  );
};

export default FeedbackModel;
