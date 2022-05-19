import {LocationMarkerIcon, StatusOnlineIcon, CalendarIcon, ClockIcon} from "@heroicons/react/outline";
import Menu from "../../glob-components/Menu";


import React from "react";
import DatePicker from "../../glob-components/DatePicker";

function HomePage() {
	const startDate = new Date();
	const endDate = new Date(startDate);
	endDate.setMonth(endDate.getMonth() + 3);

	return (
		<>
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
			<DatePicker onPick={(date) => console.log(date)} startDate={startDate} endDate={endDate} />

			<div className="px-6 pt-4 text text-xl text-gray font-SofiaProBold">
				Reservations
			</div>

			<div className="overflow-x-auto no-scrollbar scroll snap-x">
				<div className="inline-grid grid-flow-col gap-4 p-6 ">
					<div className="rounded-md bg-white w-36 px-6 py-12 drop-shadow-md">
						<div className="text text-center font-SofiaProBold grid grid-rows-3">
							<div className="absolute right-0 top-0 p-3">
								<StatusOnlineIcon className="h-7 w-7 text-red"/>
							</div>
							<div className="flex justify-left items-center">
								<ClockIcon className="h-7 w-7"/>
								<div className="text-left text-sm">
									12:00 <br/>
									18:00
								</div>
							</div>

							<div className="flex justify-left items-center">
								<CalendarIcon className="h-7 w-7"/>
								<div className="text-lg ">
									5 Mon
								</div>
							</div>
							<div className="flex justify-left items-center">
								<LocationMarkerIcon className="h-7 w-7"/>
								<div className="text-lg ">
									A1 - F2
								</div>
							</div>
						</div>
					</div>
					<div className="rounded-md bg-white w-36 px-6 py-12 drop-shadow-md">
						<div className="text text-center font-SofiaProBold grid grid-rows-3">
							<div className="absolute right-0 top-0 p-3 hidden">
								<StatusOnlineIcon className="h-7 w-7 text-red"/>
							</div>
							<div className="flex justify-left items-center">
								<ClockIcon className="h-7 w-7"/>
								<div className="text-left text-sm">
									12:00 <br/>
									18:00
								</div>
							</div>

							<div className="flex justify-left items-center">
								<CalendarIcon className="h-7 w-7"/>
								<div className="text-lg ">
									5 Mon
								</div>
							</div>
							<div className="flex justify-left items-center">
								<LocationMarkerIcon className="h-7 w-7"/>
								<div className="text-lg ">
									A1 - F2
								</div>
							</div>
						</div>
					</div>
					<div className="rounded-md bg-white w-36 px-6 py-12 drop-shadow-md">
						<div className="text text-center font-SofiaProBold grid grid-rows-3">
							<div className="absolute right-0 top-0 p-3 hidden">
								<StatusOnlineIcon className="h-7 w-7 text-red"/>
							</div>
							<div className="flex justify-left items-center">
								<ClockIcon className="h-7 w-7"/>
								<div className="text-left text-sm">
									12:00 <br />
									18:00
								</div>
							</div>

							<div className="flex justify-left items-center">
								<CalendarIcon className="h-7 w-7"/>
								<div className="text-lg ">
									5 Mon
								</div>
							</div>
							<div className="flex justify-left items-center">
								<LocationMarkerIcon className="h-7 w-7"/>
								<div className="text-lg ">
									A1 - F2
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="p-4 block fixed bottom-16 inset-x-0">
				<div className="text-sm text-gray text-center font-SofiaProLight p-2">
					8/24 tables available
				</div>
				<button className="rounded-full bg-purple text-white p-4 w-full">Reserve a table</button>
			</div>
			<Menu/>
		</>
	);
}

export default HomePage;
