import {ClockIcon} from "@heroicons/react/outline";
import {CalendarIcon} from "@heroicons/react/outline";
import {LocationMarkerIcon} from "@heroicons/react/outline";
import {StatusOnlineIcon} from "@heroicons/react/outline";

import {HomeIcon} from "@heroicons/react/outline";
import {UserGroupIcon} from "@heroicons/react/outline";
import {ExclamationCircleIcon} from "@heroicons/react/outline";
import React from "react";

function HomePage() {
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
			<div className="overflow-x-auto no-scrollbar scroll snap-x">
				<div className="inline-grid grid-flow-col gap-4 p-6 ">
					<div className="rounded-md bg-white p-4 drop-shadow-md snap-center">
						<div className="text-4xl text-center font-SofiaProBold">5</div>
						<div className="text text-center font-SofiaProBold">Mon</div>
					</div>
					<div className="rounded-md bg-red p-4 drop-shadow-md snap-center">
						<div className="text-4xl text-white text-center font-SofiaProBold">6</div>
						<div className="text text-white text-center">Thu</div>
					</div>
					<div className="rounded-md bg-white p-4 drop-shadow-md snap-center">
						<div className="text-4xl text-center font-SofiaProBold">7</div>
						<div className="text text-center font-SofiaProBold">Mon</div>
					</div>
					<div className="rounded-md bg-white p-4 drop-shadow-md snap-center">
						<div className="text-4xl text-center font-SofiaProBold">8</div>
						<div className="text text-center font-SofiaProBold">Mon</div>
					</div>

					<div className="rounded-md bg-white p-4 drop-shadow-md snap-center">
						<div className="text-4xl text-center font-SofiaProBold">9</div>
						<div className="text text-center font-SofiaProBold">Mon</div>
					</div>
					<div className="rounded-md bg-white p-4 drop-shadow-md snap-center">
						<div className="text-4xl text-center font-SofiaProBold">10</div>
						<div className="text text-center font-SofiaProBold">Mon</div>
					</div>
				</div>
			</div>

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
                                    12:00 <br className=""/>
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
                                    12:00 <br className=""/>
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
                                    12:00 <br className=""/>
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
				<button className="rounded-full bg-purple text-white p-4 w-full">Save Changes</button>
			</div>

			<div className="block fixed bottom-0 inset-x-0 p-4 grid grid-cols-3 gap-4 border-t-2 border-light-gray">
				<a href="#" className="flex justify-center">
					<HomeIcon className="h-7 w-7"/>
				</a>
				<a href="#" className="flex justify-center">
					<UserGroupIcon className="h-7 w-7"/>
				</a>
				<a href="#" className="flex justify-center">
					<ExclamationCircleIcon className="h-7 w-7"/>
				</a>
			</div>
		</div>
	);
}

export default HomePage;
