import React, { useState } from "react";
import style from "./ReminderModal.module.css";
import Input from "../Component/Input/page";
import Lable from "../Typography/text/Lable";
import Dropdown from "../Component/Dropdown/page";
import Heading from "../Typography/text/Heading";
import { Ic_Clock, Ic_Cross, Ic_Plus } from "../Utils/svg";
import SvgButton from "../Component/SvgButton/page";

const ReminderModal = ({ isOpen, onClose }) => {
  const [reminderType, setReminderType] = useState("Daily");
  const [selectedDays, setSelectedDays] = useState([]);
  const [times, setTimes] = useState(["07:00", "12:00", "16:00"]);
  const [selectedFrequency, setSelectedFrequency] = useState("Once");
  const [selectedDuration, setSelectedDuration] = useState("6 Month");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  const frequencyOptions = [
    { name: "Once", value: "Once" },
    { name: "Daily", value: "Daily" },
  ];

  const durationOptions = [
    { name: "1 Month", value: "1 Month" },
    { name: "6 Month", value: "6 Month" },
  ];

  const toggleDay = (index) => {
    setSelectedDays((prev) =>
      prev.includes(index)
        ? prev.filter((day) => day !== index)
        : [...prev, index]
    );
  };

  const handleAddTime = () => {
    const newTime = prompt("Enter Time (HH:MM)");
    if (newTime) setTimes([...times, newTime]);
  };

  return (
    <div className={`${style.modalOverlay} ${isOpen ? style.open : ""}`}>
      <div className={`${style.modalContent} ${isOpen ? style.open : ""}`}>
        <div className={style.ModelHeader}>
          <Heading className={style.Model_Heading} text={"Add Reminder"} />
          <button onClick={onClose}>{Ic_Cross.icon()}</button>
        </div>
        <div className={style.ModelInnerDiv}>
          <div className={style.labelInput}>
            <Lable text={"Title"} />
            <Input
              type="text"
              placeholder="Eg. Medicine"
              value={title}
              setValue={setTitle}
              name="title"
            />
          </div>
          <div className={style.labelInput}>
            <Lable text={"Description"} />
            <Input
              type="text"
              placeholder="Eg. Very important reminder"
              value={description}
              setValue={setDescription}
              name="description"
            />
          </div>
          <div className={style.labelInput}>
            <Lable text={"Reminder Type"} />
            <Dropdown
              data={[
                { name: "Daily", value: "Daily" },
                { name: "Weekly", value: "Weekly" },
              ]}
              value={reminderType}
              setValue={setReminderType}
              Select="Select Reminder Type"
            />
          </div>
          {reminderType === "Weekly" && (
            <div className={style.weekDays}>
              {daysOfWeek.map((day, index) => (
                <button
                  key={index}
                  className={
                    selectedDays.includes(index)
                      ? style.activeDay
                      : style.dayButton
                  }
                  onClick={() => toggleDay(index)}
                >
                  {day}
                </button>
              ))}
            </div>
          )}
          <div className={style.labelInput}>
            <Lable text={"Timeline & Schedule"} />
            <div className={style.timeContainer}>
              <button className={style.addTime} onClick={handleAddTime}>
                {Ic_Plus.icon()}
              </button>
              {times.map((time, index) => (
                <span key={index} className={style.time}>
                  {Ic_Clock.icon()}
                  {time}
                </span>
              ))}
            </div>
          </div>
          <div className={style.labelInput}>
            <Lable text={"Frequency"} />
            <Dropdown
              data={frequencyOptions}
              value={selectedFrequency}
              setValue={setSelectedFrequency}
              Select="Select Frequency"
            />
          </div>
          <div className={style.labelInput}>
            <Lable text={"Duration"} />
            <Dropdown
              data={durationOptions}
              value={selectedDuration}
              setValue={setSelectedDuration}
              Select="Select Duration"
            />
          </div>
        </div>
        <div className={style.ModelBtn}>
          <SvgButton type={"submit"} text={"Add Reminder"} />
        </div>
      </div>
    </div>
  );
};

export default ReminderModal;
