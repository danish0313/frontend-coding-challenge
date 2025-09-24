import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Step } from "../stepper/steps";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  currentStep?: number;
  steps?: Step[];
}

export default function Button({
  onClick,
  children,
  currentStep,
  steps,
}: ButtonProps) {
  const isLastStep = steps && currentStep === steps.length - 1;

  return (
    <>
      {isLastStep ? (
        ""
      ) : (
        <button
          onClick={onClick}
          type="button"
          disabled={steps && currentStep === steps.length - 1}
          className="bg-blue-600 hover:opacity-90 shadow-sm text-white py-3 px-6 w-full rounded-lg lg:mt-8 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {children}
        </button>
      )}
    </>
  );
}
