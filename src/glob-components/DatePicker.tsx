import React, {useEffect, useRef, useState} from "react";
import { default as config } from "../config.json";
import useDebounce from "../hooks/useDebounce";

function DatePicker(this: never, {
	onPick,
	startDate,
	endDate
}: { onPick: (Date: Date) => void, startDate: Date, endDate: Date }) {
	const datepickerRef = useRef<HTMLDivElement>(null);
	const [dates, setDates] = useState<{day: number, month: string, unix: number}[]>([]);
	const fn = useDebounce(onPick, 800);
	const style = "!bg-red text-white font-bold";

	useEffect(() => {
		const array: {day: number, month: string, unix: number}[] = [];
		while (startDate <= endDate) {
			console.log("");
			array.push({day: startDate.getDate(), month: config.months[startDate.getMonth()], unix: Math.floor(startDate.getTime() / 1000)});
			startDate.setUTCDate(startDate.getUTCDate() + 1);
		}
		setDates(array);
	}, [endDate, startDate]);

	const ioConfiguration = {
		rootMargin: "0% -50%",
		threshold: 0,
		root: datepickerRef.current
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				entry.target.classList.remove(...style.split(" "));
			} else {
				entry.target.classList.add(...style.split(" "));
				const rawUnixDate = entry.target.getAttribute("data-unix");
				if (rawUnixDate) fn(new Date(Number(rawUnixDate)*1000));
			}


		});
	}, ioConfiguration);

	return (
		<div
			className="rounded-md bg-white p-4 drop-shadow-md flex flex-row overflow-x-auto no-scrollbar scroll snap-x gap-x-5"
			ref={datepickerRef}>
			<div className="w-[50vw] p-4 flex flex-col flex-shrink-0"></div>
			{dates.map((value, index) =>
				<div key={index} className="p-4 flex flex-col items-center snap-center rounded-md p-4 bg-white drop-shadow-md min-w-[64px]" ref={el => el && observer.observe(el as Element)} data-unix={value.unix}>
					<div>{value.day}</div>
					<div>{value.month}</div>
				</div>
			)}
			<div className="w-[50vw] p-4 flex flex-col flex-shrink-0"></div>
		</div>
	);
}

export default DatePicker;