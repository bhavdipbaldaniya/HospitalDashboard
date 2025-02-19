import React, { useState } from "react";
import HeaderLogin from "./HeaderLogin";
import ProgressSteps from "@/src/Component/ProgressSteps/page";
import MainTitleHeading from "@/src/Typography/text/MainTitleHeading";
import Large from "@/src/Typography/text/Large";
import BasicInfo from "./BasicInfo";
import ProfileService from "./ProfileService";
import AddresMedia from "./AddresMedia";
import AdminDetails from "./AdminDetails";

const Hospitalform = () => {
  const [activeStep, setActiveStep] = useState(0);
  const demoSteps = [
    { title: "Basic Information", component: BasicInfo },
    { title: "Profile & Services", component: ProfileService },
    { title: "Address & Media", component: AddresMedia },
    { title: "Admin Details", component: AdminDetails },
  ];
  const handleStepChange = (newStep) => {
    setActiveStep(newStep);
  };

  return (
    <div>
      <HeaderLogin className={"md:!fixed z-10"} />
      <div className="flex mt-20 pt-8 md:pt-16 flex-col items-center min-h-screen bg-white">
        <div className="!text-center flex items-center  flex-col mb-[45px]">
          <MainTitleHeading
            text={"Welcome to MZAD Health – Let’s Get Your Hospital Onboarded!"}
            className={"w-full p-4 md:w-4/5"}
          />
          <Large
            text={
              "Provide the required details in three simple steps to get started"
            }
            className={"w-full p-4 pt-1 md:w-3/6"}
          />
        </div>
        <ProgressSteps
          steps={demoSteps}
          initialStep={activeStep}
          onStepChange={handleStepChange}
        />
      </div>
    </div>
  );
};

export default Hospitalform;
