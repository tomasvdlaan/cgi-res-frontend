import {LocationMarkerIcon, CameraIcon, DesktopComputerIcon, CursorClickIcon} from "@heroicons/react/outline";
import React from "react";

function PopUp() {
	return (
		<>
			<div className="block bottom-14 rounded-md fixed inset-x-0">
				<div className="rounded-md bg-white h-52 p-6 h-full drop-shadow-2xl">

					<hr className="flex-grow border-2 w-16 mx-auto rounded border-gray"/>
					<div className="grid grid-cols-2 gap-2 py-2 place-content-between">
						<div className="text-lg text-gray">
							Day
						</div>
						<div className="flex justify-end font-SofiaProBold">
							<div className="text-lg ">
								Fri, 2 Apr
							</div>
						</div>
						<div className="text-lg text-gray">
							Location
						</div>
						<div className="flex justify-end font-SofiaProBold">
							<LocationMarkerIcon className="h-7 w-7"/>
							<div className="text-lg ">
								A2
							</div>
						</div>
						<div className="text-lg text-gray ">
							Accessories
						</div>
						<div className="flex justify-end font-SofiaProBold">
							<CameraIcon className="h-7 w-7"/>
							<DesktopComputerIcon className="h-7 w-7"/>
							<CursorClickIcon className="h-7 w-7"/>
						</div>
					</div>
					<button className="drop-shadow-lg bottom rounded-lg bg-purple text-white p-4 w-full">Select</button>
				</div>
			</div>

		</>
	);
}

export default PopUp;