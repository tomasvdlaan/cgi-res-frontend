import { ClockIcon, OfficeBuildingIcon, DesktopComputerIcon, VideoCameraIcon, CursorClickIcon } from "@heroicons/react/outline";
import { CalendarIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import { StatusOnlineIcon } from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/outline";
import { UserGroupIcon } from "@heroicons/react/outline";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import React from "react";
import PlaceholderBlock from "../../../glob-components/PlaceholderBlock";

function ReservationCreatePage() {
	return (
		<>
			<div className="gap-y-4 flex flex-col p-4">

				<PlaceholderBlock title="Datum Selector" className="h-48" />
				<PlaceholderBlock title="Tijd Selector" className="h-48" />



				<div className="flex flex-col rounded-md bg-white w-50 p-8 drop-shadow-md">
					<div className="text-left text-xl text-gray font-SofiaProBold flex "> Location
					</div>
					<div className="text-right text-sm text-gray font-SofiaProBold flex  "> Accessiores
					</div>

					<div className="grid gap-x-4 grid-cols-2 justify-center items-center">

						<div className="flex flex-col justify-center items-center">

							<div className="flex flex-col justify-left items-center">
								<div className="flex flex-row items-center">
									<OfficeBuildingIcon className="h-7 my-3 w-7" />
									<div className="text-lg ml-2 ">
										F3
									</div>
								</div>
								<div className="flex flex-row items-center">
									<LocationMarkerIcon className="h-7 w-7" />
									<div className="text-lg ml-2">
										A1
									</div>
								</div>

							</div>

						</div>
						<div className="flex flex-col">
							<div className="flex my-3 m-2 justify-center items-center">
								<DesktopComputerIcon className="h-7 w-7 mx-1" />
								<CursorClickIcon className="h-7 w-7 mx-1" />
								<VideoCameraIcon className="h-7 w-7 mx-1" />
							</div>
							<button className="text-lg ml-2">
								Aanpassen
							</button>

						</div>




					</div>
				</div>




				<div className="static p-4 bottom-0">
					<div className=" grid gap-x-4 grid-cols-2 justify-center items-center">
						<button className="rounded-full bg-light-purple p-4 w-full shadow-xl">Back</button>
						<button className="rounded-full bg-purple text-white p-4 w-full shadow-xl">Confirm</button>


					</div>
				</div>

			</div>

		</>
	);
}

export default ReservationCreatePage;