import React from "react";
import { OfficeBuildingIcon, LocationMarkerIcon, DesktopComputerIcon, CursorClickIcon, VideoCameraIcon } from "@heroicons/react/outline";
import PlaceholderBlock from "../../../../glob-components/PlaceholderBlock";

function StepOne({ buildingNumber, tableNumber, options, onComplete }: { buildingNumber: string, tableNumber: string, options: { hasWebcam?: boolean, hasMonitor?: boolean, hasMouse?: boolean }, onComplete: () => void }) {
	return (
		<>
			<div className="gap-y-4 flex flex-col p-4">

				<PlaceholderBlock title="Datum Selector" className="h-48" />
				<PlaceholderBlock title="Tijd Selector" className="h-48" />



				<div className="flex flex-col rounded-md bg-white w-50 p-8 drop-shadow-md">

					<div className="grid gap-x-4 grid-cols-2 justify-center items-center">
						<div className="justify-center items-center text-xl text-gray font-SofiaProBold flex "> Location
						</div>
						<div className="justify-center items-center text-sm text-gray font-SofiaProBold flex  "> Accessiores
						</div>
					</div>
					<div className="grid gap-x-4 grid-cols-2 justify-center items-center">

						<div className="flex flex-col justify-center items-center">

							<div className="flex flex-col justify-left items-center">
								<div className="flex flex-row items-center">
									<OfficeBuildingIcon className="h-7 my-3 w-7" />
									<div className="text-lg ml-2 ">
										{buildingNumber}
									</div>
								</div>
								<div className="flex flex-row items-center">
									<LocationMarkerIcon className="h-7 w-7" />
									<div className="text-lg ml-2">
										{tableNumber}
									</div>
								</div>

							</div>

						</div>
						<div className="flex flex-col">
							<div className="flex my-3 m-2 justify-center items-center">
								{options.hasMonitor && <DesktopComputerIcon className="h-6 w-6 mx-1" />}
								{options.hasMouse && <CursorClickIcon className="h-6 w-6 mx-1" />}
								{options.hasWebcam && <VideoCameraIcon className="h-6 w-6 mx-1" />}
							</div>



							<button className="text-lg text-purple ml-2">
								<span className="underline"> Aanpassen</span> 〉
							</button>

						</div>




					</div>
				</div>




				<div className="static p-4 bottom-0">
					<div className=" grid gap-x-4 grid-cols-2 justify-center items-center">

						<a href="/" className="btn rounded-full bg-light-purple p-4 w-full shadow-xl text-center">Back</a>
						<button onClick={onComplete} className="btn rounded-full bg-purple text-white p-4 w-full shadow-xl text-center">Confirm</button>



					</div>
				</div>

			</div>

		</>
	);
}

export default StepOne;