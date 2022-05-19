/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-key */

import React, { useState, useEffect } from "react";
import { DesktopComputerIcon, CursorClickIcon, LocationMarkerIcon, CameraIcon, ChevronRightIcon, ExclamationIcon} from "@heroicons/react/outline";
import { QrReader } from "react-qr-reader";
import { Result } from "@zxing/library";
import { useParams } from "react-router-dom";
import config from "../../../config.json";
import Reservation from "../../../entities/ReservationEntity";

type qrResult = Result | null | undefined;
type qrError = Error | null | undefined;



function ReservationDetailPage() {
	const [reservationDetails, setReservationDetails] = useState<Reservation | null>(null);
	const { reservationId: id } = useParams();

	useEffect(() => {
		fetch(`${config.apiUrl}/reservation/${id}`, { method: "GET", mode: "cors" })
			.then((result) => result.json())
			.then((data) => {
				setReservationDetails(data);
			});
	}, [id]);
	

	const onResult = (result: qrResult, error: qrError) => {
		if (result === reservationDetails?.qrToken) {
			setReservationDetails({...reservationDetails, isPresent: true});

			fetch(`${config.apiUrl}/reservation/${id}`, { method: "PUT", mode: "cors", body: JSON.stringify(reservationDetails)  });
		}

		if (error) {
			console.log(error);
		}
	};


	return (
		
		<>
		
			<div>
				<h1 className=" font-SofiaProBold text-left text-black text-2xl pt-12 pl-5 " >Scan to sign in</h1>
			</div>
			<div className="pt-14"></div>
			<QrReader constraints={{facingMode: "environment", aspectRatio: 1/1}} onResult={onResult} className="p-4 "/>		
		

			<div className="block bottom-0 rounded-md fixed inset-x-0">
				<div className="rounded-md bg-white h-52 p-6 h-full drop-shadow-2xl">

					<hr className="flex-grow border-2 w-16 mx-auto rounded border-gray"/>
					<div className="grid grid-cols-2 gap-2 py-2 place-content-between">
						<div className="text-lg text-gray">
                            Day
						</div>
						<div className="flex justify-end font-SofiaProBold">
							<div className="text-lg ">
								{reservationDetails?.workspace?.building?.title ?? ""}
							</div>
						</div>
						<div className="text-lg text-gray">
                            Location
						</div>
						<div className="flex justify-end font-SofiaProBold">
							<LocationMarkerIcon className="h-7 w-7"/>
							<div className="text-lg ">
								{reservationDetails?.workspace?.title}
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

						<div className="flex font-SofiaProBold">
							<button className="text-purple">Report issue</button>
							<ChevronRightIcon className="h-4 w-4 self-center text-purple"/>
						</div>

						<div className="flex justify-end font-SofiaProBold">
							<ExclamationIcon className="h-7 w-7 text-purple"/>
                         
						</div>
                        

				
					</div>
					
				</div>
			</div>		
	
	
		
	
				
            
		
		</>
	);
}

export default ReservationDetailPage;


