
import Menu from "../../../glob-components/Menu";
import Overview from "../../../glob-components/Overview";
import PopUp from "../../../glob-components/PopUp";

import React from "react";


function ReservationsOverviewPage() {
	return (
		<div className="">
			<div className="bg-light-gray p-6">
				<div className="grid grid-cols-3 gap-2">
					<div className="col-span-2">
						<div className="text-2xl font-SofiaProBold">
							Overview
						</div>
						<div className="text text-gray font-SofiaProLight">
							Search
						</div>
					</div>
				</div>
			</div>

			<div>
				<Overview/>
			</div>

			<div className="h-[45vh]">
				<PopUp/>
			</div>

			<Menu/>
		</div>
	);
}

export default ReservationsOverviewPage;



