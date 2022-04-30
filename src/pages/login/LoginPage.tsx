import React from "react";
import TimePicker from "../reservations/create/components/TimePicker";

function LoginPage() {
	const startDate = new Date();
	const endDate = new Date(startDate);
	endDate.setMonth(endDate.getMonth() + 3);

	/*	return (
		/!*<DatePicker onPick={(date) => console.log(date)} startDate={startDate} endDate={endDate} />*!/
	);*/

	return (
		<TimePicker onPick={time => console.log(time)} />
	);
}

export default LoginPage;