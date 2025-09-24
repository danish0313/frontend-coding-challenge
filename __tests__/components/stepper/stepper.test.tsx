import React from "react";
import { render, screen } from "@testing-library/react";
import Stepper from "../../../components/stepper/stepper";

describe("Stepper", () => {

	// dummy data for steps
  const steps = [
    { title: "Step One" },
    { title: "Step Two" },
    { title: "Step Three" },
  ];
   
  it("renders all step titles", () => {
    render(<Stepper steps={steps} currentStep={1} />);
    steps.forEach((step) => {
      expect(screen.getByText(step.title)).not.toBeNull();
    });
  });

  it("highlights the current step correctly", () => {
    render(<Stepper steps={steps} currentStep={1} />);

    // testing circles
    const currentStepCircle = screen.getByText("2");
    expect(currentStepCircle.classList.contains("bg-blue-600")).toBe(true);
    expect(currentStepCircle.classList.contains("text-white")).toBe(true);

    const otherStepCircle = screen.getByText("1");

	expect(otherStepCircle.classList.contains("bg-white")).toBe(true);
	expect(otherStepCircle.classList.contains("text-gray-600")).toBe(true);

    const currentStepLabel = screen.getByText("Step Two");
    expect(currentStepLabel.classList.contains("text-blue-600")).toBe(true);
  });

   // testing correct number of circles
  it("renders the correct number of step circles", () => {
    render(<Stepper steps={steps} currentStep={0} />);
    const circles = screen.getAllByText(/^[1-3]$/);
    expect(circles.length).toBe(3);
  });
});

