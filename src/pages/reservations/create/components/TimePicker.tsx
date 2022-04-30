import React, {useEffect, useRef, useState} from "react";
import useRange from "../../../../hooks/useRange";
import useDebounce from "../../../../hooks/useDebounce";

function TimePicker({onPick}: {onPick: (Date: Date) => void}) {
	const timePickerRef = useRef<HTMLDivElement>(null);
	const elementsRef = useRef<HTMLDivElement[]>([]);
	const fn = useDebounce(onPick, 800);

	// start at 1, because 0 is already an existing element, because of the data-origin attribute
	const hourRange = useRange(1, 23);
	const minuteRange = useRange(1, 59);

	const style = "!bg-red text-white font-bold !opacity-100";

	useEffect(() => {
		const ioConfiguration = {
			rootMargin: "-50% 0%",
			threshold: 0,
			root: timePickerRef.current
		};

		let hour = "00";
		let minute = "00";

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {

				if (!entry.isIntersecting) {
					return entry.target.classList.remove(...style.split(" "));
				}

				entry.target.classList.add(...style.split(" "));
				const trigger = entry.target.getAttribute("data-trigger");

				if (trigger) {
					const parent = entry.target.parentElement as HTMLElement;

					if (trigger === "forw") {
						parent.scrollTop = entry.target.clientHeight;
					} else if (trigger === "back") {
						parent.scrollTop = parent.scrollHeight - entry.target.clientHeight * 4;
					}
				}

				if (entry.target.getAttribute("data-hour") != null) hour = entry.target.getAttribute("data-hour")!.padStart(2, "0");
				if (entry.target.getAttribute("data-minute")) minute = entry.target.getAttribute("data-minute")!.padStart(2, "0");

				fn(`${hour}:${minute}`);

			});
		}, ioConfiguration);

		for (const ref of elementsRef.current) {
			observer.observe(ref);
		}

		return () => {
			observer.disconnect();
		};
	});

	return (
		<div className="rounded-md bg-white flex bg-white p-4 m-4 drop-shadow-md timepicker h-48" ref={timePickerRef}>
			<div className="flex flex-col scroll no-scrollbar overflow-y-auto snap-y w-full" id="timepicker-hour">
				{/*FAKE*/}
				<div className="p-4 flex flex-col items-center snap-center bg-white p-4 opacity-50">
					22
				</div>
				<div className="p-4 flex flex-col items-center snap-center bg-white p-4 opacity-50" data-trigger="back" ref={el => el && elementsRef.current.push(el)}>
					23
				</div>

				{/*REAL*/}
				<div className="p-4 flex flex-col items-center snap-center bg-white p-4 opacity-50" data-hour={0} ref={el => el && elementsRef.current.push(el) && el.scrollIntoView({behavior: "auto", block: "center", inline: "center"})}>
					00
				</div>

				{hourRange.map((item, index) =>
					<div className="p-4 flex flex-col items-center snap-center bg-white p-4 opacity-50" data-hour={item} key={index} ref={el => el && elementsRef.current.push(el)}>
						{item.toString().padStart(2, "0")}
					</div>
				)}

				{/*FAKE*/}
				<div className="p-4 flex flex-col items-center snap-center bg-white p-4 opacity-50" data-trigger="forw" ref={el => el && elementsRef.current.push(el)}>
					00
				</div>
				<div className="p-4 flex flex-col items-center snap-center bg-white p-4 opacity-50">
					01
				</div>

			</div>

			{/*MINUTE----------------------------------------------------------------------------*/}
			<div className="flex flex-col scroll no-scrollbar overflow-y-auto snap-y w-full" id="timepicker-minute">
				{/*FAKE*/}
				<div className="p-4 flex flex-col items-center snap-center bg-white p-4 opacity-50 ">
					58
				</div>
				<div className="p-4 flex flex-col items-center snap-center bg-white p-4 opacity-50 " data-trigger="back" ref={el => el && elementsRef.current.push(el)}>
					59
				</div>

				{/*REAL*/}
				<div className="p-4 flex flex-col items-center snap-center bg-white p-4 opacity-50 " data-minute={0} data-origin={true} ref={el => el && elementsRef.current.push(el) && el.scrollIntoView({behavior: "auto", block: "center", inline: "center"})}>
					00
				</div>
				{minuteRange.map((item, index) =>
					<div className="p-4 flex flex-col items-center snap-center bg-white p-4 opacity-50 " data-minute={item} key={index} ref={el => el && elementsRef.current.push(el)}>
						{item.toString().padStart(2, "0")}
					</div>
				)}

				{/*FAKE*/}
				<div className="p-4 flex flex-col items-center snap-center bg-white p-4 opacity-50 " data-trigger="forw" ref={el => el && elementsRef.current.push(el)}>
					00
				</div>
				<div className="p-4 flex flex-col items-center snap-center bg-white p-4 opacity-50 ">
					01
				</div>

			</div>

		</div>
	);
}

export default TimePicker;