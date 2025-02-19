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
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/src/Component/Input/page";
import ErrorText from "@/src/Typography/text/ErrorText";
import { Ic_Email } from "@/src/Utils/svg";
import LoginOtp from "./LoginOtp";

const LoginWithEmail = ({ setPageChange }) => {
  const [show, setShow] = useState();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email address is required")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email format"
      ),
  });

  const initialValues = {
    email: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isValid,
    dirty,
  } = formik;

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

              <form
                onSubmit={handleSubmit}
                className="w-11/12 mt-8 md:mt-[53px]"
              >
                <SubHeading
                  text={"Login to Your Account"}
                  className={
                    "mb-4 md:mb-[53px] !text-[--font_colours_secondary]"
                  }
                />
                <Medium text={"Email Address"} className={"mb-[10px]"} />
                <Input
                  name="email"
                  placeholder={"Enter Email"}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  svg={Ic_Email.icon()}
                />
                {touched.email && errors.email && (
                  <ErrorText text={errors.email} />
                )}
                <Button
                  text={"Get OTP"}
                  type="submit"
                  disabled={!(isValid && dirty)}
                  className={"mb-2 md:mb-[23px] mt-5 md:mt-12"}
                  onClick={() => setShow("OtpVerify")}
                />
                <Button
                  onClick={() => setPageChange(false)}
                  text={"Login with Mobile Number"}
                />
              </form>
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

export default LoginWithEmail;
