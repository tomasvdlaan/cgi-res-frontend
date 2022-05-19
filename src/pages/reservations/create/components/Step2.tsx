import React, {useEffect, useRef, useState} from "react";
import config from "../../../../config.json";
import {CalendarIcon, LocationMarkerIcon, StatusOnlineIcon} from "@heroicons/react/outline";
import {SearchIcon} from "@heroicons/react/outline";
import Workspace from "../../../../entities/WorkspaceEntity";


function StepTwo({
	buildingNumber,
	tableNumber,
	options,
	onSelect
}: { buildingNumber: string, tableNumber: string, options: { hasWebcam?: boolean, hasMonitor?: boolean, hasMouse?: boolean }, onSelect: (id: number, name: string) => void }) {
	const [data, setData] = useState<Workspace[]>([]);
	// const selectedSeat = useRef<number | null>(null);

	useEffect(() => {
		refresh();
	}, []);


	// const selectWorkspace( (id: number) => {
	// 		selectedSeat.current = id;
	// 		setCurrentStep(1);
	//
	// 	return id;
	// })


	const refresh = () =>
		fetch(`${config.apiUrl}/workspace`, { method: "GET", mode: "cors" })
			.then((result) => result.json())
			.then((data) => {
				setData(data);
			});

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

			<div className="grid grid-cols-3 gap-3 p-5 px-14">
				{data.map((w: Workspace) => (
					// eslint-disable-next-line react/jsx-key
					<button onClick={() => onSelect(w.id ? w.id : 1, w.title ? w.title : "A1")} className="rounded-md bg-white first:bg-red first:text-white px-2 py-7 drop-shadow-md flex justify-center">
						<LocationMarkerIcon className="h-7 w-7"/>
						<div className="text-lg text-center">
							{w.title}
						</div>
					</button>
				))}
			</div>
		</>
	);
}

export default StepTwo;