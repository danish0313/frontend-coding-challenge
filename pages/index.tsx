import React, {useState, useEffect} from "react";
import Button from "../components/repareo/button";
import ButtonWrapper from "../components/repareo/buttonWrapper";
import Header from "../components/repareo/header";
import MainWrapper from "../components/repareo/mainWrapper";
import StepperWrapper from "../components/repareo/stepperWrapper";
import Stepper from "../components/stepper/stepper";
import useStepper from "../hooks/useStepper";
import { steps } from "../components/stepper/steps";

export default function Home() {
	const { currentStep, handleNextStep } = useStepper();
	const [isClient, setIsClient] = useState<boolean>(false);
  
  useEffect(() => {
    setIsClient(true);  
  }, []);

  if (!isClient) {
	// Don't render anything on the server
    return null; 
  }

	return (
		<>
			<Header />
			<MainWrapper>
				<StepperWrapper>
					<Stepper currentStep={currentStep} steps={steps} />
				</StepperWrapper>
				<ButtonWrapper>
					<Button onClick={handleNextStep} currentStep={currentStep} steps={steps}>Next</Button>
				</ButtonWrapper>
			</MainWrapper>
		</>
	);
}
