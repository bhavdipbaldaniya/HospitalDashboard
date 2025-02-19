"use client";
import Heading from "@/src/Typography/text/Heading";
import { doctorimages, healthlogo, healthlogo1 } from "@/src/Utils/images";
import Image from "next/image";
import React, { useState } from "react";
import HeaderLogin from "./HeaderLogin";
import Regular from "@/src/Typography/text/Regular";
import Button from "@/src/Component/Button/page";
import Medium from "@/src/Typography/text/Medium";
import SubHeading from "@/src/Typography/text/SubHeading";
import LoginInput from "@/src/Component/LoginInput/page";
import LoginOtp from "./LoginOtp";
import { useLoginUserMutation } from "../../services/authApi";

const LoginWithNumber = ({ setPageChange }) => {
  const [loginUser] = useLoginUserMutation();

  const handleClick = async () => {
    console.log("login");
    
    const body = {
      phone: "+919909782765",
      language_id: 1,
      language_code: "en",
      // "otp":178857
    };
    const { data, error } = await loginUser(body);
    console.log(data);
  };

  const [show, setShow] = useState();
  const countryList = [
    {
      name: "Qatar",
      code: "QA",
      dial_code: "+974",
      flag: "https://flagcdn.com/w40/qa.png",
    },
    {
      name: "United States",
      code: "US",
      dial_code: "+1",
      flag: "https://flagcdn.com/w40/us.png",
    },
    {
      name: "India",
      code: "IN",
      dial_code: "+91",
      flag: "https://flagcdn.com/w40/in.png",
    },
  ];

  return (
    <>
      {show === "OtpVerify" ? (
        <LoginOtp />
      ) : (
        <div className="">
          <HeaderLogin />
          <div className="w-full h-full mt-20 md:mt-0 flex">
            <div className="h-full min-h-screen md:min-h-fit -mt-20 md:mt-0 py-10 md:py-0 md:h-auto w-full 2xl:w-2/3 px-4 sm:px-10 lg:px-16 md:px-8 xl:px-32  flex items-center justify-center flex-col  place-content-centerw bg-white">
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
                  text={"Register with Your Mobile Number"}
                  className={
                    "mb-4 md:mb-[53px] !text-[--font_colours_secondary]"
                  }
                />
                <Medium text={"Mobile Number"} className={"mb-[10px]"} />
                <LoginInput countries={countryList} />
                <Button
                  text={"Get OTP"}
                  disabled={false}
                  className={"mb-2 md:mb-[23px] mt-5 md:mt-12"}
                  onClick={() => handleClick()}
                />
                <Button
                  onClick={() => setPageChange(true)}
                  text={"Login with Email"}
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

export default LoginWithNumber;
