import { useAuth0 } from "@auth0/auth0-react";
import { CheckIcon, XIcon } from "@heroicons/react/outline";
import moment from "moment";
import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { Link } from "react-router-dom";
import Reservation from "../../../entities/ReservationEntity";
import Menu from "../../../glob-components/Menu";

function ReservationsOverviewPage() {
	const {
		user,
		isAuthenticated,
		loginWithRedirect,
		logout,
		getAccessTokenSilently,
	} = useAuth0();

	const [reservations, setReservations] = useState<Reservation[]>([]);
	const [selectedDate, setSelectedDate] = useState<{
    date: number;
    month: string;
  }>({ date: 16, month: "May" });

	const [start, setStart] = useState<Date>(new Date());
	const [end, setEnd] = useState<Date>();

	const refresh = async () => {
		let url = "http://localhost:3001/reservation?includePast=true";

		if (start) url += `&start=${start.toISOString()}`;
		if (end) url += `&end=${end.toISOString()}`;

		fetch(url, {
			method: "GET",
			mode: "cors",
		})
			.then((result) => result.json())
			.then((data) => {
				setReservations(data);
			});
	};

	useEffect(() => {
		refresh();
	}, [start, end]);

	return (
		<>
			<div className="flex flex-col">
				<div className="flex flex-col bg-gray-200 p-6 pb-28">
					<div className="flex flex-col space-y-4">
						<span className="text-2xl font-bold">Reservations</span>

						{/* <div className="flex flex-row bg-gray-300 rounded overflow-hidden items-center">
              <SearchIcon className="h-8 m-1 text-gray-500" />
              <input
                className="flex-1 py-2 bg-transparent placeholder:text-gray-500 placeholder:italic"
                placeholder="Search for a workplace..."
              />
              <XCircleIcon className="h-4 m-3 text-gray-500" />
            </div> */}
					</div>

					<div className="flex flex-row space-x-4 mt-4">
						<div className="flex-1 flex flex-col">
							<span>Start</span>
							<DateTimePicker value={start} onChange={setStart} />
						</div>
						<div className="flex-1 flex flex-col">
							<span>End</span>
							<DateTimePicker value={end} onChange={setEnd} />
						</div>
					</div>
				</div>

				<div className="flex flex-col space-y-2 p-4 -mt-16">
					{reservations.map((r) => (
						// eslint-disable-next-line react/jsx-key
						<Link to={`/reservations/${r.id}`}>
							{moment(r.end) < moment(new Date()) ? (
								<div className="rounded border border-gray-200 bg-gray-400 px-4 p-2 flex flex-row items-center space-x-4 justify-between">
									<div className="flex flex-col">
										<div className="space-x-1 flex flex-row items-center">
											<span className="font-bold">{r.workspace?.title}</span>
											{r.scannedAt ? (
												<span className="text-emerald-500">
													<CheckIcon className="h-4" />
												</span>
											) : (
												<span className="text-rose-500">
													<XIcon className="h-4" />
												</span>
											)}
										</div>
										<span className="font-light italic">
											{r.workspace?.building?.title}
										</span>
									</div>

									<span>
										{moment(r.start).format("D MMMM HH:mm")} -{" "}
										{moment(r.end).format("HH:mm")}
									</span>
								</div>
							) : moment(r.start) < moment(new Date()) ? (
								<div className="rounded border border-gray-200 bg-white px-4 p-2 flex flex-row items-center space-x-4 justify-between">
									<div className="flex flex-col">
										<div className="space-x-2 flex flex-row items-center">
											<span className="font-bold">{r.workspace?.title}</span>
											<span className="flex h-3 w-3 relative">
												<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
												<span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
											</span>
											<span className="font-light italic text-gray-500">
                        Now active
											</span>
										</div>
										<span className="font-light italic">
											{r.workspace?.building?.title}
										</span>
									</div>

									<span>
										{moment(r.start).format("D MMMM HH:mm")} -{" "}
										{moment(r.end).format("HH:mm")}
									</span>
								</div>
							) : (
								<div className="rounded border border-gray-200 bg-white px-4 p-2 flex flex-row items-center space-x-4 justify-between">
									<div className="flex flex-col">
										<span className="font-bold">{r.workspace?.title}</span>
										<span className="font-light italic">
											{r.workspace?.building?.title}
										</span>
									</div>

									<span>
										{moment(r.start).format("D MMMM HH:mm")} -{" "}
										{moment(r.end).format("HH:mm")}
									</span>
								</div>
							)}
						</Link>
					))}
				</div>
			</div>

			<Menu />
		</>
	);
}

export default ReservationsOverviewPage;
