import Button from "@/src/Component/Button/page";
import Input from "@/src/Component/Input/page";
import Heading from "@/src/Typography/text/Heading";
import Lable from "@/src/Typography/text/Lable";
import { HospitalProfile } from "@/src/Utils/images";
import { Ic_Calender, Ic_Email, Ic_Map, Ic_Phone } from "@/src/Utils/svg";
import Image from "next/image";
import React, { useState } from "react";
import Regular from "@/src/Typography/text/Regular";
import Caption from "@/src/Typography/text/Caption";
import SelectInput from "@/src/Component/Input/SelectInput";
import { useRouter } from "next/navigation";

const AdminDetails = ({ setCurrentStep }) => {
  const router = useRouter();

  const validateFile = (file) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      return "Only JPG, JPEG, PNG files are allowed";
    }

    if (file.size > maxSize) {
      return "File size should be less than 5MB";
    }

    return null;
  };

  const [profileImage, setProfileImage] = useState(HospitalProfile);
  return (
    <div className="pb-10 p-4">
      <Heading
        text={"Profile & Services"}
        className={"pb-[10px] border-b border-[--border_colours_light_border]"}
      />
      <div className="sm:grid sm:grid-cols-1 gap-4 md:gap-8 mt-8 flex flex-col">
        <div>
          <Lable text={"Hospital Logo"} />
          <div className="flex gap-3 items-center ">
            <Image
              src={profileImage}
              alt="Profile Image"
              width={100}
              height={100}
              className="rounded-full bg-[--surface_colours_light_gray_surf]"
            />
            <div>
              <div className="flex gap-2 items-center">
                <label>
                  <Input
                    type="file"
                    className="!hidden"
                    accept="image/jpeg, image/png, image/jpg"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      console.log(e.target.files);
                      validateFile(file);
                      const profile = URL.createObjectURL(file);
                      setProfileImage(profile);
                    }}
                  />
                  <Regular
                    text={"Upload photo"}
                    className={"p-[5px] !text-[#003B3E]"}
                  />
                </label>
                <button
                  className="text-base p-[5px] font-normal text-[--alerts_error_text]"
                  onClick={() => setProfileImage(null)}
                >
                  Delete
                </button>
              </div>
              <Caption text={"   Max file size 4 MB"} className={"p-[5px]"} />
            </div>
          </div>
        </div>
        <div>
          <Lable text={"Services "} />
          <Input
            type="text"
            placeholder="Hospital Address"
            // value={name}
            // setValue={setName}
            // name="name"
            svg={Ic_Map.icon()}
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-8">
          <div className="w-full">
            <Lable text={"Gender"} />
            <SelectInput
              placeholder="Select Gender"
              // value={name}
              // setValue={setName}
              // name="name"
              svg={Ic_Email.icon()}
              options={["USA", "Canada", "UK", "Germany", "India"]}
            />
          </div>
          <div className="w-full">
            <Lable text={"DOB"} />
            <SelectInput
              placeholder="Select DOB"
              // value={name}
              // setValue={setName}
              // name="name"
              svg={Ic_Calender.icon()}
              options={["USA", "Canada", "UK", "Germany", "India"]}
            />
          </div>
          <div className="w-full">
            <Lable text={"Phone Number"} />
            <Input
              type="Number"
              placeholder="Enter Admin Phone Number"
              // value={name}
              // setValue={setName}
              // name="name"
              svg={Ic_Phone.icon()}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between">
        <Button
          text={"Back"}
          disabled={false}
          onClick={() => {
            setCurrentStep(1);
          }}
          className={
            "mt-8  sm:!w-fit !bg-transparent !border border-[--border_colours_light_border] !text-[--text_colours_dark_text] !hover:bg-[--background_colours_light_background] !hover:text-[--text_colours_light_text]"
          }
        />
        <Button
          text={"Save & Continue"}
          disabled={false}
          onClick={() => {
            router.push("/");
          }}
          className={"mt-8  sm:!w-fit"}
        />
      </div>
    </div>
  );
};

export default AdminDetails;
