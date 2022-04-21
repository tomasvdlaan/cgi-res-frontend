import {LocationMarkerIcon} from "@heroicons/react/outline";
import React, {useState} from "react";

function Overview() {
	const selectSeat = (event: any) => {
		const target = event.currentTarget;
		target.getAttribute("data-location");


		const allWithClass = Array.from(
			document.getElementsByClassName("active")
		);

		allWithClass.forEach(element => {
			element.classList.remove("bg-red");
			element.classList.remove("text-white");
			element.classList.remove("active");
		});

		target.classList.add("bg-red");
		target.classList.add("text-white");
		target.classList.add("active");
	};

	return (
		<>
			<div className="grid place-items-center">
				<div className="grid grid-cols-3 gap-4 p-6 content-center">
					<div className="rounded-md bg-light-gray w-20 h-20 px-4 py-6" >
						<div className="flex justify-left items-center font-SofiaProBold text-gray">
							<LocationMarkerIcon className="h-7 w-7"/>
							<div className="text-lg ">
								A1
							</div>
						</div>
					</div>
					<div id="A2" className="rounded-md bg-white w-20 h-20 px-4 py-6 drop-shadow-md" data-location="A2" onClick={selectSeat}>
						<div className="flex justify-left items-center font-SofiaProBold">
							<LocationMarkerIcon className="h-7 w-7"/>
							<div className="text-lg ">
								A2
							</div>
						</div>
					</div>
					<div className="rounded-md bg-white w-20 h-20 px-4 py-6 drop-shadow-md" onClick={selectSeat}>
						<div className="flex justify-left items-center font-SofiaProBold">
							<LocationMarkerIcon className="h-7 w-7"/>
							<div className="text-lg ">
								A3
							</div>
						</div>
					</div>
					<div className="rounded-md bg-white w-20 h-20 px-4 py-6 drop-shadow-md" onClick={selectSeat}>
						<div className="flex justify-left items-center font-SofiaProBold">
							<LocationMarkerIcon className="h-7 w-7"/>
							<div className="text-lg ">
								A4
							</div>
						</div>
					</div>
					<div className="rounded-md bg-light-gray w-20 h-20 px-4 py-6">
						<div className="flex justify-left items-center font-SofiaProBold text-gray">
							<LocationMarkerIcon className="h-7 w-7"/>
							<div className="text-lg ">
								A5
							</div>
						</div>
					</div>
					<div className="rounded-md bg-light-gray w-20 h-20 px-4 py-6">
						<div className="flex justify-left items-center font-SofiaProBold text-gray">
							<LocationMarkerIcon className="h-7 w-7"/>
							<div className="text-lg ">
								A6
							</div>
						</div>
					</div>
					<div className="rounded-md bg-white w-20 h-20 px-4 py-6 drop-shadow-md" onClick={selectSeat}>
						<div className="flex justify-left items-center font-SofiaProBold">
							<LocationMarkerIcon className="h-7 w-7"/>
							<div className="text-lg ">
								A7
							</div>
						</div>
					</div>
					<div className="rounded-md bg-white w-20 h-20 px-4 py-6 drop-shadow-md" onClick={selectSeat}>
						<div className="flex justify-left items-center font-SofiaProBold">
							<LocationMarkerIcon className="h-7 w-7"/>
							<div className="text-lg ">
								A8
							</div>
						</div>
					</div>
					<div className="rounded-md bg-light-gray w-20 h-20 px-4 py-6">
						<div className="flex justify-left items-center font-SofiaProBold text-gray">
							<LocationMarkerIcon className="h-7 w-7"/>
							<div className="text-lg ">
								A9
							</div>
						</div>
					</div>
					<div className="rounded-md bg-white w-20 h-20 px-4 py-6 drop-shadow-md" onClick={selectSeat}>
						<div className="flex justify-left items-center font-SofiaProBold">
							<LocationMarkerIcon className="h-7 w-7"/>
							<div className="text-lg ">
								A10
							</div>
						</div>
					</div>
					<div className="rounded-md bg-light-gray w-20 h-20 px-4 py-6">
						<div className="flex justify-left items-center font-SofiaProBold text-gray">

							<LocationMarkerIcon className="h-7 w-7"/>
							<div className="text-lg ">
								A11
							</div>
						</div>
					</div>
					<div className="rounded-md bg-white w-20 h-20 px-4 py-6 drop-shadow-md" onClick={selectSeat}>
						<div className="flex justify-left items-center font-SofiaProBold">
							<LocationMarkerIcon className="h-7 w-7"/>
							<div className="text-lg ">
								A12
							</div>
						</div>
					</div>
					<div className="rounded-md bg-white w-20 h-20 px-4 py-6 drop-shadow-md" onClick={selectSeat}>
						<div className="flex justify-left items-center font-SofiaProBold">
							<LocationMarkerIcon className="h-7 w-7"/>
							<div className="text-lg ">
								A13
							</div>
						</div>
					</div>
					<div className="rounded-md bg-light-gray w-20 h-20 px-4 py-6">
						<div className="flex justify-left items-center font-SofiaProBold text-gray">

							<LocationMarkerIcon className="h-7 w-7"/>
							<div className="text-lg ">
								A14
							</div>
						</div>
					</div>
					<div className="rounded-md bg-white w-20 h-20 px-4 py-6 drop-shadow-md" onClick={selectSeat}>
						<div className="flex justify-left items-center font-SofiaProBold">
							<LocationMarkerIcon className="h-7 w-7"/>
							<div className="text-lg ">
								A15
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
// const defaultSelection = document.getElementById("A2") as HTMLElement;
// defaultSelection.classList.add("bg-red");
// defaultSelection.classList.add("text-white");
// defaultSelection.classList.add("active");
// console.log(defaultSelection);

export default Overview;