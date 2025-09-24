import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Step } from "../stepper/steps";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  currentStep?: number;
  steps?: Step[];
  color?: "primary" | "secondary";
}

export default function Button({
  onClick,
  children,
  currentStep,
  steps,
  color = "primary",
}: ButtonProps) {

  const isLastStep = steps && currentStep === steps.length - 1;

  let colorCns = "bg-blue-600 text-white";
	if (color === "secondary") {
		colorCns = "bg-white border border-gray-200 text-black";
	}

  return (
    <>
      {isLastStep ? (
        ""
      ) : (
        <button
          onClick={onClick}
          type="button"
          className={`${colorCns} hover:opacity-90 shadow-sm py-3 px-6 w-full rounded-lg lg:mt-8 mt-6`}
        >
          {children}
        </button>
      )}
    </>
  );
}
