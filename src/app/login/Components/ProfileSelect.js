import React from "react";
import HeaderLogin from "./HeaderLogin";
import MainTitleHeading from "@/src/Typography/text/MainTitleHeading";
import Large from "@/src/Typography/text/Large";
import Input from "@/src/Component/Input/page";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { doctoreiconimd, hospitalicon } from "@/src/Utils/images";
import Button from "@/src/Component/Button/page";
import { useRouter } from "next/navigation";
import Hospitalform from "./Hospitalform";

const ProfileSelect = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState();

  const options = [
    { label: "Doctor", icon: doctoreiconimd },
    { label: "Hospital", icon: hospitalicon },
  ];
  return (
    <>
      {selected === "Hospital" && show === "Continue" ? (
        <Hospitalform />
      ) : (
        <>
          <HeaderLogin />
          <div className="h-screen md:-mt-20 bg-white flex flex-col items-center justify-evenly">
            <div className="text-center flex flex-col items-center">
              <MainTitleHeading text={"Who Are You?"} className={"mb-[9px]"} />
              <Large
                text={
                  "Choose the option that best describes your role to continue"
                }
                className={"!text-[#6B7280] w-4/5"}
              />
            </div>
            <div>
              <div className="flex sm:flex-row flex-col gap-4">
                {options.map((option) => (
                  <div
                    key={option.label}
                    className={`border relative overflow-hidden rounded-[34px] sm:pt-[33px] sm:pl-[37px] sm:pr-[15px] py-2 px-4 sm:w-[291px] h-20 w-72 sm:h-[264px] flex flex-col items-center  justify-center sm:justify-start cursor-pointer transition-all ${
                      selected === option.label
                        ? "border-[--radio_btn] bg-[#39edb710]"
                        : "border-[--border_colours_light_border]"
                    }`}
                    onClick={() => setSelected(option.label)}
                  >
                    <div className="flex gap-2 flex-row-reverse sm:flex-row justify-end sm:justify-between w-full items-center ">
                      <MainTitleHeading text={option.label} className="" />
                      <div className="h-[30px]  flex items-center justify-center aspect-square rounded-full border-[3px] border-[--radio_btn] z-20">
                        {selected === option.label && (
                          <div
                            className="h-[15px] bg-[--radio_btn] rounded-full aspect-square"
                            size={20}
                          />
                        )}
                      </div>
                    </div>
                    <Image
                      src={option.icon}
                      alt={option.label}
                      className="absolute -bottom-[8px] right-0 h-20 w-fit sm:h-44 sm:block "
                    />
                  </div>
                ))}
              </div>
            </div>
            <Button
              text={"Continue"}
              disabled={selected ? false : true}
              className={"!w-72 sm:!w-[400px]"}
              onClick={() => {
                setShow("Continue");
              }}
            />
          </div>
        </>
      )}
    </>
  );
};

export default ProfileSelect;
