import Button from "@/src/Component/Button/page";
import MultiSelectInput from "@/src/Component/Input/Multiinput";
import Textarea from "@/src/Component/Input/Textarea";
import Heading from "@/src/Typography/text/Heading";
import Lable from "@/src/Typography/text/Lable";
import { Ic_Hospital } from "@/src/Utils/svg";
import React, { useState } from "react";

const ProfileService = ({ setCurrentStep }) => {
  const [file, setFile] = useState(null);
  const servicesList = ["Facility 1", "Facility 2", "Facility 3", "Facility 4"];

  return (
    <div className="pb-10 p-4">
      <Heading
        text={"Profile & Services"}
        className={"pb-[10px] border-b border-[--border_colours_light_border]"}
      />
      <div className="sm:grid sm:grid-cols-1 gap-4 md:gap-8 mt-8 flex flex-col">
        <div>
          <Lable text={"About Hospital"} />
          <Textarea
            type="text"
            placeholder="About Hospital"
            // value={name}
            // setValue={setName}
            // name="name"
            svg={Ic_Hospital.icon()}
            className={"!h-28 justify-start !flex"}
          />
        </div>
        <div>
          <Lable text={"Services "} />
          <MultiSelectInput servicesList={servicesList} />
        </div>
        <div>
          <Lable text={"Facilites"} />
          <MultiSelectInput servicesList={servicesList} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between">
        <Button
          text={"Back"}
          disabled={false}
          onClick={() => {
            setCurrentStep(0);
          }}
          className={
            "mt-8  sm:!w-fit !bg-transparent !border border-[--border_colours_light_border] !text-[--text_colours_dark_text] !hover:bg-[--background_colours_light_background] !hover:text-[--text_colours_light_text]"
          }
        />
        <Button
          text={"Save & Continue"}
          disabled={false}
          onClick={() => {
            setCurrentStep(2);
          }}
          className={"mt-8  sm:!w-fit"}
        />
      </div>
    </div>
  );
};

export default ProfileService;
