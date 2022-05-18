import {CalendarIcon, ClockIcon, LocationMarkerIcon, StatusOnlineIcon} from "@heroicons/react/outline";
import Menu from "../../glob-components/Menu";
import DatePicker from "../../glob-components/DatePicker";

import React, {useEffect, useState} from "react";
import {Reservation} from "../reservations/ReservationEntity";
import DateHelper from "../../helper/DateHelper";
import { Link } from "react-router-dom";

function HomePage() {
	const [data, setData] = useState<Reservation[]>([]);

	const startDate = new Date(Date.now());
	const endDate = new Date(startDate);
	endDate.setMonth(endDate.getMonth() + 1);

	useEffect(() => {
		fetch("http://localhost:3001/reservation", {method: "GET", mode: "cors"})
			.then((result) => result.json())
			.then((data) => {
				setData(data);
			});
	}, []);
	//
	// const fetchFromDay = (selectedDate: Date) => {
	// 	fetch("http://localhost:3001/reservation", {method: "GET", mode: "cors"})
	// 		.then((result) => result.json())
	// 		.then((data) => {
	//
	// 			console.log(selectedDate);
	//
	// 			// setData(data);
	// 		});
	// };


	return (
		<div className="">
			<div className="bg-light-gray p-6">
				<div className="grid grid-cols-3 gap-2">
					<div className="col-span-2">
						<div className="text-2xl font-SofiaProBold">
							Hello vincent
						</div>
						<div className="text text-gray font-SofiaProLight">
							2 Reservations today
						</div>
					</div>
					<figure className="bg-slate-100 rounded-xl self-center dark:bg-slate-800">
						<img className="w-10 h-10 rounded-full clear-right mx-auto" src="images/profile_picture.jpg" alt=""/>
					</figure>
				</div>
			</div>

			<DatePicker onPick={(date) => console.log()} startDate={startDate} endDate={endDate} />

			<div className="px-6 pt-4 text text-xl text-gray font-SofiaProBold">
				Reservations
			</div>

			<div className="overflow-x-auto no-scrollbar scroll snap-x">
				<div className="inline-grid grid-flow-col gap-4 p-6 ">

					{data.map((r: Reservation) => (
						// eslint-disable-next-line react/jsx-key
						<div className="rounded-md bg-white w-36 px-6 py-12 drop-shadow-md">
							<div className="text text-center font-SofiaProBold grid grid-rows-3">
								<div className="absolute right-0 top-0 p-3 hidden">
									<StatusOnlineIcon className="h-7 w-7 text-red"/>
								</div>
								<div className="flex justify-left items-center">
									<ClockIcon className="h-7 w-7"/>
									<div className="text-left text-sm pl-2">
										<div className="border-b-2 border-black-500">
											{r.start && DateHelper.getTimeString(new Date(r.start))}
										</div>
										<div>
											{r.end && DateHelper.getTimeString(new Date(r.end))}
										</div>
									</div>
								</div>

								<div className="flex justify-left items-center">
									<CalendarIcon className="h-7 w-7"/>
									<div className="text-lg pl-1">
										{r.start && DateHelper.getMinifiedDateString(new Date(r.start))}
									</div>
								</div>
								<div className="flex justify-left items-center">
									<LocationMarkerIcon className="h-7 w-7"/>
									<div className="text-lg pl-2">{r.workspace?.title} - {r.workspace?.building?.title}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="p-4 block fixed bottom-16 inset-x-0">
				<button className="rounded-full bg-purple text-white p-4 w-full">
					<Link to="../reservations/create">Reserve a table</Link>
				</button>
			</div>
			<Menu/>
		</div>
	);
}

export default HomePage;
