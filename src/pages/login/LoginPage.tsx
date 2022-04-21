import React from "react";
import Datepicker from "../../glob-components/Datepicker";

function LoginPage() {
	const startDate = new Date();
	const endDate = new Date(startDate);
	endDate.setMonth(endDate.getMonth() + 3);

	return (
		<Datepicker onPick={(date) => console.log(date)} startDate={startDate} endDate={endDate} />
	);
}

export default LoginPage;