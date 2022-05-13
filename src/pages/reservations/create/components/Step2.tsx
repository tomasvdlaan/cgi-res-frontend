import React from "react";

function StepTwo({ buildingNumber, tableNumber, options, onSelect }: { buildingNumber: string, tableNumber: string, options: { hasWebcam?: boolean, hasMonitor?: boolean, hasMouse?: boolean }, onSelect: (id: number) => void }) {
	return (
		<div>Step 2</div>
	);
}

export default StepTwo;