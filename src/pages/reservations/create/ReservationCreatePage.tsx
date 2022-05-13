
import React, { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import PlaceholderBlock from "../../../glob-components/PlaceholderBlock";
import StepOne from "./components/Step1";
import StepTwo from "./components/Step2";
import TimePicker from "./components/TimePicker";

function ReservationCreatePage() {
	const selectedSeat = useRef<number | null>(null);
	const [currentStep, setCurrentStep] = useState<number>(1);
	const navigate = useNavigate();

	const buildingNumber = "F1";
	const tableNumber = "A1";
	const options = {
		hasMouse: true,
		hasMonitor: false,
		hasWebcam: true
	};

	const onBack = () => {
		navigate("/");
	};

	const onSelect = (id: number) => {
		selectedSeat.current = id;
		setCurrentStep(1);
	};
	
	const onComplete = () => {
		// Get data from page
	

		// send create request to api

 
		navigate("/");
	};
	if (currentStep === 1) return <StepOne buildingNumber={buildingNumber} tableNumber={tableNumber} options={options} onSeatAdapt={() => setCurrentStep(2)}  onBack={onBack} onComplete={onComplete} />;
	if (currentStep === 2) return <StepTwo buildingNumber={buildingNumber} tableNumber={tableNumber} options={options} onSelect={onSelect}/>;

	setCurrentStep(1);
	return (<div>Loading...</div>);
}

export default ReservationCreatePage;