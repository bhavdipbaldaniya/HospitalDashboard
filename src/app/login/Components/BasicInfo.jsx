import Button from "@/src/Component/Button/page";
import Input from "@/src/Component/Input/page";
import Heading from "@/src/Typography/text/Heading";
import Lable from "@/src/Typography/text/Lable";
import SubHeading from "@/src/Typography/text/SubHeading";
import {
  Ic_Calender,
  Ic_Diploma,
  Ic_Documnet,
  Ic_Email,
  Ic_Hospital,
  Ic_Id,
  Ic_Phone,
  Ic_Website,
} from "@/src/Utils/svg";
import React, { useState } from "react";

const BasicInfo = ({ setCurrentStep }) => {
  const [file, setFile] = useState(null);

  return (
    <div className="pb-10 p-4">
      <Heading
        text={"Basic Information"}
        className={"pb-[10px] border-b border-[--border_colours_light_border]"}
      />
      <div className="sm:grid sm:grid-cols-2 gap-4 md:gap-8 mt-8 flex flex-col">
        <div>
          <Lable text={" Hospital Name"} />
          <Input
            type="text"
            placeholder="Enter hospital name"
            // value={name}
            // setValue={setName}
            // name="name"
            svg={Ic_Hospital.icon()}
          />
        </div>
        <div>
          <Lable text={"Hospital Email"} />
          <Input
            type="email"
            placeholder="Enter Hospital Email Address"
            // value={name}
            // setValue={setName}
            // name="name"
            svg={Ic_Email.icon()}
          />
        </div>
        <div>
          <Lable text={"Hospital Website"} />
          <Input
            type="text"
            placeholder="Enter website link"
            // value={name}
            // setValue={setName}
            // name="name"
            svg={Ic_Website.icon()}
          />
        </div>
        <div>
          <Lable text={"Establish Date"} />
          <Input
            type="date"
            // placeholder="Enter website link"
            // value={name}
            // setValue={setName}
            // name="name"
            svg={Ic_Calender.icon()}
          />
        </div>
        <div>
          <Lable text={"Tax ID Number"} />
          <Input
            type="text"
            placeholder="Enter Tax ID Number"
            // value={name}
            // setValue={setName}
            // name="name"
            svg={Ic_Id.icon()}
          />
        </div>
        <div>
          <Lable text={"Registration Number"} />
          <Input
            type="text"
            placeholder="Enter Registration Number"
            // value={name}
            // setValue={setName}
            // name="name"
            svg={Ic_Diploma.icon()}
          />
        </div>
        <div>
          <Lable text={"Upload Tax ID Document"} />
          <Input
            type="file"
            // placeholder="Enter website link"
            // value={name}
            // setValue={setName}
            // name="name"
            svg={Ic_Documnet.icon()}
            filename="Upload Tax ID Documentr"
          />
        </div>
        <div>
          <Lable text={"Upload Registration Number"} />
          <Input
            type="file"
            // placeholder="Enter website link"
            // value={name}
            value={file}
            setValue={setFile}
            svg={Ic_Documnet.icon()}
            filename="Upload Registration Number"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between">
        <div></div>
        <Button
          text={"Save & Continue"}
          disabled={false}
          onClick={() => {
            setCurrentStep(1);
          }}
          className={"mt-8  sm:!w-fit "}
        />
      </div>
    </div>
  );
};

export default BasicInfo;
