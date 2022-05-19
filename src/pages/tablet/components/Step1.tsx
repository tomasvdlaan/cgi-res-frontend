import React, {useEffect, useRef, useState} from "react";
import { OfficeBuildingIcon, LocationMarkerIcon, DesktopComputerIcon, CursorClickIcon, VideoCameraIcon } from "@heroicons/react/outline";
import config from "../../../config.json";
import Reservation from "../../../entities/ReservationEntity";
import {useParams} from "react-router-dom";

function StepOne({
	idNumber,
	buildingNumber,
	tableNumber,
	options,
	onComplete,
	onSeatAdapt,
	onBack
}: {idNumber: number, buildingNumber: string, tableNumber: string, options: { hasWebcam?: boolean, hasMonitor?: boolean, hasMouse?: boolean }, onComplete: () => void, onSeatAdapt: () => void, onBack: () => void }) {
	const [reservationDetails, setReservationDetails] = useState<Reservation | null>(null);
	const { reservationId: id } = useParams();
	let selectUserPromt = false;

	const QRsrc = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="+ reservationDetails?.secret +"";

	useEffect(() => {
		fetch(`${config.apiUrl}/reservation/${idNumber}`, { method: "GET", mode: "cors" })
			.then((result) => result.json())
			.then((data) => {
				setReservationDetails(data);
			});
	}, [id]);

	if (selectUserPromt && reservationDetails?.secret != undefined ){
		selectUserPromt = true;
	}

	return (
		<>
			<div className="grid grid-cols-5 gap-4">

				<div>
					<img className="clear-right mx-auto p-5" src="images/cgi_logo.png" alt=""/>
					<div className="static p-4 h-full">
						<div className=" justify-center items-center">
							<button onClick={onSeatAdapt} className="btn rounded-full bg-purple text-white p-4 w-full shadow-xl text-center">Overzicht</button>
						</div>
					</div>
				</div>

				<div className="gap-y-4 flex flex-col p-4 col-span-4">
					<div className="flex flex-col bg-white w-50 p-8 m-8 text-center">
						<img className="w-64 h-64" src={QRsrc}/>
					</div>

					<div className="flex flex-col rounded-md bg-white w-50 p-8 m-8 drop-shadow-md">
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default StepOne;