import React from "react";

function StepTwo({ buildingNumber, tableNumber, options, onComplete }: { buildingNumber: string, tableNumber: string, options: { hasWebcam?: boolean, hasMonitor?: boolean, hasMouse?: boolean }, onComplete: () => void }) {
	return (
		<div>Step 2</div>
	);
}

export default StepTwo;