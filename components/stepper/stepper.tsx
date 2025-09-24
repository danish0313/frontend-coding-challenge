import React from "react";
import { Step } from "../stepper/steps";

interface StepperProps {
  currentStep: number;
  steps: Step[];
}

export default function Stepper(props: StepperProps) {
  return (
    <div className="h-[100px] border border-dashed border-gray-200 rounded flex justify-center items-center">
      {/* Stepper main */}
      <div className="flex gap-10 justify-between items-center relative">
        {props.steps.map((step, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            {/* Step circles */}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border text-sm font-medium ${
                index === props.currentStep
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-300"
              }`}
            >
              {index + 1}
            </div>

            {/* Step labels */}
            <p
              className={`mt-2 text-xs ${
                index === props.currentStep ? "text-blue-600 font-medium" : "text-gray-600"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}

        {/* Background line */}
        <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-300 -z-10"></div>

        {/* Active line */}
        <div
          className="absolute top-4 left-0 h-0.5 bg-blue-600 -z-10 transition-all duration-300"
          style={{
            width: `${(props.currentStep / (props.steps.length - 1)) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
