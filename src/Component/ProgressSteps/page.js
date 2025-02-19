"use client";
import React, { useState } from "react";
import style from "./ProgressSteps.module.css";
import Large from "@/src/Typography/text/Large";

const CheckIcon = () => (
  <svg
    className={style.checkmark}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const ProgressSteps = ({ steps = [], initialStep = 0, onStepChange }) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  if (!steps || steps.length === 0) {
    return null;
  }

  // const handleStepClick = (index) => {
  //   if (index <= currentStep + 1) {
  //     setCurrentStep(index);
  //     if (onStepChange) {
  //       onStepChange(index);
  //     }
  //   }
  // };

  const getStepStatus = (index) => {
    if (index < currentStep) return "completed";
    if (index === currentStep) return "current";
    return "";
  };

  const StepComponent = steps[currentStep]?.component;

  return (
    <div className="w-full md:w-auto">
      <div className={style.container}>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className={style.stepContainer}>
              <div
                className={`${style.step} ${style[getStepStatus(index)]}`}
                // onClick={() => handleStepClick(index)}
                role="button"
                tabIndex={0}
              >
                <span className={style.icon}>
                  {index < currentStep ? (
                    <CheckIcon />
                  ) : (
                    <span className={style.number}>{index + 1}</span>
                  )}
                </span>
                <Large text={step.title} className={"hidden md:block"} />
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`${style.connector} ${
                    index < currentStep ? style.completed : ""
                  }`}
                />
              )}
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className={style.stepContent}>
        {StepComponent && <StepComponent setCurrentStep={setCurrentStep} />}
      </div>
    </div>
  );
};

export default ProgressSteps;
