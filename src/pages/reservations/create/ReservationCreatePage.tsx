import {ClockIcon, OfficeBuildingIcon, DesktopComputerIcon, VideoCameraIcon, CursorClickIcon} from "@heroicons/react/outline";
import {CalendarIcon} from "@heroicons/react/outline";
import {LocationMarkerIcon} from "@heroicons/react/outline";
import {StatusOnlineIcon} from "@heroicons/react/outline";

import {HomeIcon} from "@heroicons/react/outline";
import {UserGroupIcon} from "@heroicons/react/outline";
import {ExclamationCircleIcon} from "@heroicons/react/outline";
import React from "react";
import PlaceholderBlock from "../../../glob-components/PlaceholderBlock";

function ReservationCreatePage() {
	return (
		<>
			<div className="gap-y-4 flex flex-col p-4">
				<PlaceholderBlock title="Datum Selector" className="h-48" />
				<PlaceholderBlock title="Tijd Selector" className="h-48" />

				<div className="rounded-md bg-white w-50 px-6 py-20 drop-shadow-md">
					<div className="text-left text-xl text-gray font-SofiaProBold absolute left-3 top-4 "> Location</div>
					<div className="text-right text-sm text-gray font-SofiaProBold absolute right-3 top-4 "> Accessiores</div>
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

			<div className="static p-4 bottom-0">
				<div className=" grid gap-x-4 grid-cols-2 justify-center items-center">
					<button className="rounded-full bg-light-purple p-4 w-full shadow-xl">Back</button>
					<button className="rounded-full bg-purple text-white p-4 w-full shadow-xl">Confirm</button>

				</div>
			</div>
		
		</>
	);
}

export default ReservationCreatePage;