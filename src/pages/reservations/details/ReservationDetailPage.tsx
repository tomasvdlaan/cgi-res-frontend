import { useParams } from "react-router-dom";
import React from "react";

function ReservationDetailPage() {
	const params = useParams();
	return (
		<div>{params.reservationId} Reservatie</div>
	);
}

export default ReservationDetailPage;