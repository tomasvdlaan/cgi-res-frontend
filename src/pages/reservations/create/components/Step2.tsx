import React from "react";

import {SearchIcon} from "@heroicons/react/outline";

function StepTwo({
	buildingNumber,
	tableNumber,
	options,
	onSelect
}: { buildingNumber: string, tableNumber: string, options: { hasWebcam?: boolean, hasMonitor?: boolean, hasMouse?: boolean }, onSelect: (id: number) => void }) {
	return (
		<>
			<div className="bg-white-gray p-6">
				<div className="grid">
					<div className="text-2xl font-SofiaProBold">
						Select a Seat
					</div>
					<div className="pt-2 relative mx-auto text-gray w-full">
						<input className="text-gray bg-light-gray h-8 px-5 w-full rounded-lg focus:outline-none" type="search" name="search" placeholder="Search"/>
						<button type="submit" className="absolute right-0 top-0 mt-3 mr-3">
							<SearchIcon className="h-6 w-6 text-gray"/>
						</button>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-3 gap-3">
				<div>01</div>
				<div>02</div>
				<div>03</div>
				<div>09</div>
			</div>


		</>
	);
}

export default StepTwo;