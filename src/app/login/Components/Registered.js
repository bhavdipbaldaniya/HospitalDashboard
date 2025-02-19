import React, { useState } from "react";
import HeaderLogin from "./HeaderLogin";
import Image from "next/image";
import Heading from "@/src/Typography/text/Heading";
import Regular from "@/src/Typography/text/Regular";
import SubHeading from "@/src/Typography/text/SubHeading";
import Medium from "@/src/Typography/text/Medium";
import LoginInput from "@/src/Component/LoginInput/page";
import Button from "@/src/Component/Button/page";
import { doctorimages, healthlogo1 } from "@/src/Utils/images";
import Input from "@/src/Component/Input/page";
import BackButton from "@/src/Component/BackButton/page";
import ProfileSelect from "./ProfileSelect";

const Registered = () => {
  const [show, setShow] = useState();

  return (
    <>
      {show === "Let’s Setup Profile" ? (
        <ProfileSelect />
      ) : (
        <div className="">
          <HeaderLogin />
          <div className="w-full h-full mt-20 md:mt-0 flex">
            <div className="h-full justify-evenly min-h-screen md:min-h-fit -mt-20 md:mt-0 py-10 md:py-0 md:h-auto w-full 2xl:w-2/3 px-4 sm:px-10 lg:px-16 md:px-8 xl:px-32  flex items-center justify-center flex-col  place-content-centerw bg-white">
              <div className="flex items-center justify-start flex-col !text-center">
                <Image
                  src={healthlogo1}
                  alt="MZADA"
                  className="h-20 w-auto mb-[14px]"
                />
                <Heading
                  text={"Join our care network—your health deserves the best."}
                  className={"mb-[7px]"}
                />
                <Regular
                  text={"Join our care network—your health deserves the best."}
                  className={"px-10 md:px-[73px]"}
                />
              </div>
              <div className="w-11/12 mt-8 md:mt-[53px]">
                <SubHeading
                  text={`Account Registered!`}
                  className={"text-center mb-2 md:mb-[53px]"}
                />
                <Button
                  text={"Let’s Setup Profile"}
                  disabled={false}
                  className={"mb-2 md:mb-[23px] mt-5 md:mt-12"}
                  onClick={() => setShow("Let’s Setup Profile")}
                />
              </div>
            </div>
            <div className="md:w-5/6 hidden md:block lg:w-full -mt-20 -z-10 h-screen">
              <Image
                src={doctorimages}
                alt="doctor image"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Registered;
