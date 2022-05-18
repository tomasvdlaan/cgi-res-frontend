// import moment from "moment";
// import Global from "./Constants";
//
// const dateStringer = (start: Date) => {
// 	const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// 	const startMoment = moment(start);
// 	return "" + startMoment.date().toString() + " " + days[startMoment.day()] + "";
// };


class DateHelper {
	public static getTimeString(date: Date) {
		return `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
	}

	public static getMinifiedDateString(date: Date) {
		const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

		return `${date.getDate()} ${days[date.getDay()]}`;
	}
}

export default DateHelper;