"use client";
import React, { useState } from "react";
import styles from "./Stepper.module.css";
import Large from "@/src/Typography/text/Large";

const CheckIcon = () => (
  <svg
    className={styles.checkmark}
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

  const handleStepClick = (index) => {
    if (index <= currentStep + 1) {
      setCurrentStep(index);
      if (onStepChange) {
        onStepChange(index);
      }
    }
  };

  const getStepStatus = (index) => {
    if (index < currentStep) return "completed";
    if (index === currentStep) return "current";
    return "";
  };

  return (
    <div className={styles.container}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className={styles.stepContainer}>
            <div
              className={`${styles.step} ${styles[getStepStatus(index)]}`}
              onClick={() => handleStepClick(index)}
              role="button"
              tabIndex={0}
            >
              <span className={styles.icon}>
                {index < currentStep ? (
                  <CheckIcon />
                ) : (
                  <span className={styles.number}>{index + 1}</span>
                )}
              </span>

              {/* {step.title} */}
              <Large text={step.title} />
            </div>

            {index < steps.length - 1 && (
              <div
                className={`${styles.connector} ${
                  index < currentStep ? styles.completed : ""
                }`}
              />
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
export default ProgressSteps;
