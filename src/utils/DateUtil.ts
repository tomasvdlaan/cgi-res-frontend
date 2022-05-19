import {shortDays} from "../config.json";

class DateUtil {
	public static getTimeString(date: Date) {
		return `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
	}

	public static getMinifiedDateString(date: Date) {
		return `${date.getDate()} ${shortDays[date.getDay()]}`;
	}
}

export default DateUtil;
