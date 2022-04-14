import React from "react";
import PlaceholderBlock from "../../../glob-components/PlaceholderBlock";

function ReservationCreatePage() {
	return (
		<>
			<div className="gap-y-4 flex flex-col p-4">
				<PlaceholderBlock title="Datum Selector" className="h-48"/>
				<PlaceholderBlock title="Tijd Selector" className="h-48"/>
				<PlaceholderBlock title="Plaats Selector" className="h-48"/>
			</div>
			<div className="absolute p-4 bottom-0">
				<div className=" grid gap-x-4 grid-cols-2">
					<PlaceholderBlock title="Cancel"/>
					<PlaceholderBlock title="Selecteren"/>
				</div>
			</div>
		</>
	);
}

export default ReservationCreatePage;