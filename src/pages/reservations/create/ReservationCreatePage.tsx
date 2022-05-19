import React, { useState } from "react";
import StepOne from "./components/Step1";
import StepTwo from "./components/Step2";
import {useNavigate} from "react-router-dom";

function ReservationCreatePage() {
	const [currentStep, setCurrentStep] = useState<number>(1);
	//this is fine
	const [seatAttributes, setSeatAttributes] = useState<{buildingNumber: string, tableNumber: string, options: {hasMouse: boolean, hasMonitor: boolean, hasWebcam: boolean}}>({
		buildingNumber: "HTC",
		tableNumber: "A1",
		options: {
			hasMouse: true,
			hasMonitor: false,
			hasWebcam: true
		}
	});
	const navigate = useNavigate();

	const onBack = () => {
		navigate("/");
	};

	const onSelect = (id: number, name: string) => {
		console.log(name);

		setSeatAttributes({
			buildingNumber: "HTC",
			tableNumber: name,
			options: {
				hasMouse: true,
				hasMonitor: false,
				hasWebcam: true
			}
		});

		setCurrentStep(1);
	};

	const onComplete = () => {
		// Get data from page
	

		// send create request to api

 
		navigate("/");
	};
	if (currentStep === 1) return <StepOne buildingNumber={seatAttributes.buildingNumber} tableNumber={seatAttributes.tableNumber} options={seatAttributes.options} onSeatAdapt={() => setCurrentStep(2)}  onBack={onBack} onComplete={onComplete} />;
	if (currentStep === 2) return <StepTwo buildingNumber={seatAttributes.buildingNumber} tableNumber={seatAttributes.tableNumber} options={seatAttributes.options} onSelect={onSelect}/>;

	setCurrentStep(1);
	return (<div>Loading...</div>);
}

export default ReservationCreatePage;