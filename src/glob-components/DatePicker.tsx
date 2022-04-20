import React from "react";

function DatePicker() {
	return (
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
	);
}

export default DatePicker;