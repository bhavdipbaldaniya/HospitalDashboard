import React, { useState } from "react";
import HeaderLogin from "./HeaderLogin";
import Image from "next/image";
import Heading from "@/src/Typography/text/Heading";
import Regular from "@/src/Typography/text/Regular";
import Medium from "@/src/Typography/text/Medium";
import Button from "@/src/Component/Button/page";
import { doctorimages, healthlogo1 } from "@/src/Utils/images";
import BackButton from "@/src/Component/BackButton/page";
import Registered from "./Registered";
import OtpInput from "@/src/Component/Input/OtpInput";

const LoginOtp = () => {
  const [show, setShow] = useState();
  const [number, setNumber] = useState("");
  const [otpEntered, setOtpEntered] = useState("");

  const email = "exmaple@gmail.com";
  const phNumber = "8279492748";

  const handleOtpComplete = (otp) => {
    console.log(otp);
    setOtpEntered(otp);
  };
  console.log(otpEntered);

  return (
    <>
      {show === "Verify" ? (
        <Registered />
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
                <BackButton text={"Back"} className={"mb-4 md:mb-[53px] "} />
                <Heading text={`We’ve sent you an OTP on`} />
                <Heading
                  text={email || phNumber}
                  className={"mb-4 md:mb-[53px] "}
                />
                <Medium text={"Enter OTP"} className={"mb-[10px]"} />
                <div className="flex gap-[10px] !text-center">
                  <OtpInput length={4} onComplete={handleOtpComplete} />
                </div>

                <Button
                  text={"Verify"}
                  disabled={otpEntered.length === 4 ? false : true}
                  className={"mb-2 md:mb-[23px] mt-5 md:mt-12"}
                  onClick={() => setShow("Verify")}
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

export default LoginOtp;
