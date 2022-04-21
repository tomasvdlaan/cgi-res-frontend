import React from "react";
import DatePicker from "../../glob-components/DatePicker";

function LoginPage() {
	const startDate = new Date();
	const endDate = new Date(startDate);
	endDate.setMonth(endDate.getMonth() + 3);

	return (
		<DatePicker onPick={(date) => console.log(date)} startDate={startDate} endDate={endDate} />
	);
}

export default LoginPage;