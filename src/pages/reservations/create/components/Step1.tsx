import React, { useEffect, useRef, useState } from "react";
import { OfficeBuildingIcon, LocationMarkerIcon, DesktopComputerIcon, CursorClickIcon, VideoCameraIcon, DatabaseIcon } from "@heroicons/react/outline";
import PlaceholderBlock from "../../../../glob-components/PlaceholderBlock";
import TimePicker from "./TimePicker";
import DatePicker from "../../../../glob-components/DatePicker";

function StepOne({ buildingNumber, tableNumber, options, onComplete, onSeatAdapt, onBack }: { buildingNumber: string, tableNumber: string, options: { hasWebcam?: boolean, hasMonitor?: boolean, hasMouse?: boolean }, onComplete: () => void, onSeatAdapt: () => void, onBack: () => void }) {

	const [timepickerState, setTimepickerState] = useState<number>(0);

	// ISSUE: CAUSES CURRENTLY VISIBLE TIMEPICKER TO RENDER AND THEN STATE CHANGES TO 00:00
	const startTime = useRef<Date>();
	const endTime = useRef<Date>();
	const pickedDate = useRef<Date>(new Date());
	const startDate = new Date();
	const dateThreeMonthsFromNow = new Date(startDate);
	dateThreeMonthsFromNow.setMonth(dateThreeMonthsFromNow.getMonth() + 3);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onPress = (ev: any) => {
		setTimepickerState(timepickerState === 0 ? 1 : 0);
		console.log(pickedDate);
		console.log("Start " + startTime.current);
		console.log("End " + endTime.current);
	};

	return (
		<>
			<div className="gap-y-4 flex flex-col p-4">


				<DatePicker onPick={date => pickedDate.current = date} startDate={ startDate } endDate={  dateThreeMonthsFromNow } />
				
				<button onClick={onPress}>Toggle {timepickerState}</button>
				{timepickerState === 0 && <TimePicker onPick={date => startTime.current = date}/>}
				{timepickerState === 1 && <TimePicker onPick={date => endTime.current = date}/>}



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



							<button className="text-lg text-purple ml-2" onClick={onSeatAdapt}>
								<span className="underline"> Aanpassen</span> 〉
							</button>

						</div>




					</div>
				</div>




				<div className="static p-4 bottom-0">
					<div className=" grid gap-x-4 grid-cols-2 justify-center items-center">

						<button onClick={onBack} className="btn rounded-full bg-light-purple p-4 w-full shadow-xl text-center">Back</button>
						<button onClick={onComplete} className="btn rounded-full bg-purple text-white p-4 w-full shadow-xl text-center">Confirm</button> 



					</div>
				</div>

			</div>

		</>
	);
}

export default StepOne;