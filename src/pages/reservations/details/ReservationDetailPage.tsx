/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-key */

import React, { useState, useEffect, useRef } from "react";
import { DesktopComputerIcon, CursorClickIcon, LocationMarkerIcon, CameraIcon, ChevronRightIcon, ExclamationIcon, SearchIcon } from "@heroicons/react/outline";
import { QrReader } from "react-qr-reader";
import { Result } from "@zxing/library";
import { useParams } from "react-router-dom";
import config from "../../../config.json";
import Reservation from "../../../entities/ReservationEntity";

type qrResult = Result | null | undefined;
type qrError = Error | null | undefined;

function ReservationDetailPage() {
	const [reservationDetails, setReservationDetails] = useState<Reservation | null>(null);
	const [hasVisibilePopup, setVisibilePopup] = useState<boolean>(false);
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

	const openPopup = () => {
		setVisibilePopup(true);
	};

	const closePopup = (event?: any) => {
		setVisibilePopup(false);

		if (event) {
			event.target.title.value = "";
			event.target.description.value = "";
			event.target.urgency.value = "";
		}
	}; 

	const onSubmit = (event: any) => {
		event.preventDefault();
	

		fetch(`${config.apiUrl}/problem`, {method: "POST", mode: "cors", body: JSON.stringify({
			title: event.target.title.value,
			description: event.target.description.value,
			urgency: event.target.urgency.value,
		})});

		closePopup(event);


	};

	return (
		
		<>
			{/* hidden class om te hidden */}
			<form className={`absolute bottom-0 bg-white z-50 w-full  ${hasVisibilePopup ? "" : "hidden"}`} onSubmit={onSubmit}>
				<div className="rounded-md  bg-white px-4 pt-5 pb-8 font-SofiaProBold text-left text-lg  drop-shadow-2xl font-extrabold">
					<div className="pt-3">
						<hr className="flex-grow border-2 w-16 mx-auto rounded border-gray"/>
					</div>
					<h1 className="pb-2 pl-1"> Problem</h1>
					
					<p className="text-sm text-gray pl-1 font-bold"> Describe the problem </p>
					
					<div className="pt-2 relative mx-auto text-gray w-full">
						<input className="text-gray bg-light-gray h-8 px-5 w-full rounded-lg focus:outline-none" type="text" placeholder="Title" name="title"/>
					</div>

					<div className="pt-2 relative mx-auto text-gray w-full">
						<textarea className="text-gray bg-light-gray h-8 px-5 w-full rounded-lg focus:outline-none" name="description" placeholder="Write here..."/>
					</div>

					<p className="text-sm pl-1 text-gray font-bold pt-4">Urgency</p>
					<div>
						<input type="range" name="urgency" className="w-full" 
							min="0" max="5" step="1"></input>
					</div>
					<br></br>
					<div className=" grid gap-x-4 grid-cols-2 justify-center items-center">
				    <button type="submit" className="rounded-full bg-light-purple text-black p-4 w-full">Back</button>
						<button type="submit" className="rounded-full bg-purple text-white p-4 w-full">Confirm</button>
					</div>
					
				</div>
			</form>
			

                    



                    
		

		
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
							<button onClick={openPopup} className="text-purple">Report issue</button>
							
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


