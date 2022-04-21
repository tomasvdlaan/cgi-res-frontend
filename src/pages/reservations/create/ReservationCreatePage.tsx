
import React, { useState } from "react";
import PlaceholderBlock from "../../../glob-components/PlaceholderBlock";
import StepOne from "./components/Step1";
import StepTwo from "./components/Step2";

function ReservationCreatePage() {

	const [currentStep, setCurrentStep] = useState<number>(1);

	const buildingNumber = "F1";
	const tableNumber = "A1";
	const options = {
		hasMouse: true,
		hasMonitor: false,
		hasWebcam: true
	};

	if (currentStep === 1) return <StepOne buildingNumber={buildingNumber} tableNumber={tableNumber} options={options} onComplete={() => setCurrentStep(currentStep + 1)} />;
	if (currentStep === 2) return <StepTwo buildingNumber={buildingNumber} tableNumber={tableNumber} options={options} onComplete={() => setCurrentStep(currentStep + 1)} />;

	setCurrentStep(1);
	return (<div>Loading...</div>);

}

export default ReservationCreatePage;