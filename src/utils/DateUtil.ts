import { default as config } from "../config.json";

class DateUtil {
	public static getTimeString(date: Date) {
		return `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
	}

	public static getMinifiedDateDayString(date: Date) {
		return `${date.getDate()} ${config.shortDays[date.getDay()]}`;
	}

	public static getDateString(date: Date) {
		return `${date.getDate()} ${date.getMonth()}`;
	}

	public static getFullDateTimeString(date: Date) {
		return `${date.getDate()} ${date.getMonth()} ${date.getHours()}:${date.getMinutes()}`;
	}
}

export default DateUtil;
