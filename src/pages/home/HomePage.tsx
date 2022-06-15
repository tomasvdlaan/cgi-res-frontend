import {useAuth0} from "@auth0/auth0-react";
import {
	ArrowRightIcon,
	CalendarIcon,
	ClockIcon,
	LocationMarkerIcon,
	PlusCircleIcon
} from "@heroicons/react/outline";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Reservation from "../../entities/ReservationEntity";
import Menu from "../../glob-components/Menu";
import DateUtil from "../../utils/DateUtil";
import {default as config} from "../../config.json";

function HomePage() {
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
	}>({date: new Date().getDate(), month: config.months[new Date().getMonth()]});
	const [possibleDates, setPossibleDates] = useState<{
		date: number;
		month: string;
	}[]>([]);

	const startDate = new Date();
	const endDate = new Date(startDate);
	endDate.setMonth(endDate.getMonth() + 3);

	const refresh = async () => {
		fetch(`${config.apiUrl}/reservation`, {method: "GET", mode: "cors"})
			.then((result) => result.json())
			.then((data) => {
				console.log(data);
				setReservations(data);
			});
	};

	useEffect(() => {
		refresh();

		const startDate = new Date();
		const endDate = new Date(startDate);
		endDate.setMonth(endDate.getMonth() + 3);

		const array: { date: number, month: string }[] = [];
		while (startDate <= endDate) {
			array.push({date: startDate.getDate(), month: config.months[startDate.getMonth()]});
			startDate.setUTCDate(startDate.getUTCDate() + 1);
		}
		setPossibleDates(array);
	}, []);

	return (
		<>
			<div className="flex flex-row items-center p-6 bg-gray-200">
				{isAuthenticated ? (
					<>
						<div className="flex-1 flex flex-col">
							<span className="text-2xl">Welcome {user?.name}</span>
							<span className="text-gray">
								{reservations.length} reservations today
							</span>
						</div>
						<div>
							<button
								className="bg-red-500 text-white rounded p-4 py-2"
								onClick={() => logout()}
							>
								Logout
							</button>
						</div>
					</>
				) : (
					<button
						className="bg-red-500 text-white rounded p-4 py-2"
						onClick={loginWithRedirect}
					>
						Log in
					</button>
				)}
			</div>

			<div className="overflow-x-scroll no-scrollbar p-6 space-x-4 flex flex-row">
				{possibleDates.map((d, index) =>
					<div
						onClick={() => setSelectedDate(d)}
						className={`${d.date === selectedDate.date && d.month === selectedDate.month  ? "bg-red-500 text-white" : "bg-gray-200"} rounded  py-2 cursor-pointer`}
						key={d.date}
					>
						<div className="w-20 h-20 flex items-center justify-center">
							<span className="text-4xl font-bold">{d.date}</span>
						</div>
						<div className="flex items-center justify-center">
							<span>{d.month}</span>
						</div>
					</div>
				)}
			</div>

			{/* <div className="bg-light-gray p-6">
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2">
            <div className="text-2xl font-SofiaProBold">Hello vincent</div>
            <div className="text text-gray font-SofiaProLight">
              2 Reservations today
            </div>
          </div>
        </div>
      </div> */}
			{/* <DatePicker
        onPick={(date) => console.log(date)}
        startDate={startDate}
        endDate={endDate}
      /> */}

			<div className="px-6 pt-4 space-x-4 flex flex-row items-center">
				<span className="font-bold text-2xl">Reservations</span>
				<Link
					to="/reservations"
					className="text-gray-500 font-light italic flex flex-row space-x-2 items-center"
				>
					<span>See more</span>
					<ArrowRightIcon className="w-4" />
				</Link>
			</div>

			<div className="flex flex-row p-6 space-x-4">
				{reservations.map((r, index) => (
					<Link to={`/reservations/${r.id}`} key={index}>
						<div className="flex flex-col rounded shadow p-4 bg-gray-100 space-y-4 w-56">
							<div className="flex-1 flex flex-row items-center space-x-4">
								<ClockIcon className="h-8" />
								<div className="flex-1 flex flex-col font-bold">
									<span>{r.start && DateUtil.getTimeString(r.start)}</span>
									<hr />
									<span>{r.end && DateUtil.getTimeString(r.end)}</span>
								</div>
							</div>

							<div className="flex-1 flex flex-row items-center space-x-4">
								<CalendarIcon className="h-8" />
								<div className="flex-1 font-bold">
									<span>{r.start && DateUtil.getDateString(r.start)}</span>
								</div>
							</div>

							<div className="flex-1 flex flex-row items-center space-x-4">
								<LocationMarkerIcon className="h-8" />
								<div className="flex-1 flex flex-col ">
									<span className="font-bold">{r.workspace?.title}</span>
									<span className="italic text-gray-500">
										{r.workspace?.building?.title}
									</span>
								</div>
							</div>
						</div>
					</Link>
				))}

				<Link
					to="/reservations/create"
					className="flex rounded shadow p-4 bg-gray-100 space-y-4 w-48 items-center justify-center"
				>
					<div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
						<PlusCircleIcon className="w-10 text-gray-300" />
					</div>
				</Link>
			</div>

			<div className="overflow-x-auto no-scrollbar scroll snap-x">
				<div className="inline-grid grid-flow-col gap-4 p-6 ">
					{/* <div className="rounded-md bg-white w-36 px-6 py-12 drop-shadow-md">
            <div className="text text-center font-SofiaProBold grid grid-rows-3">
              <div className="absolute right-0 top-0 p-3">
                <StatusOnlineIcon className="h-7 w-7 text-red" />
              </div>
              <div className="flex justify-left items-center">
                <ClockIcon className="h-7 w-7" />
                <div className="text-left text-sm">
                  12:00 <br />
                  18:00
                </div>
              </div>
              <div className="flex justify-left items-center">
                <CalendarIcon className="h-7 w-7" />
                <div className="text-lg ">5 Mon</div>
              </div>
              <div className="flex justify-left items-center">
                <LocationMarkerIcon className="h-7 w-7" />
                <div className="text-lg ">A1 - F2</div>
              </div>
            </div>
          </div> */}

					{/* <div className="rounded-md bg-white w-36 px-6 py-12 drop-shadow-md">
            <div className="text text-center font-SofiaProBold grid grid-rows-3">
              <div className="absolute right-0 top-0 p-3 hidden">
                <StatusOnlineIcon className="h-7 w-7 text-red" />
              </div>
              <div className="flex justify-left items-center">
                <ClockIcon className="h-7 w-7" />
                <div className="text-left text-sm">
                  12:00 <br />
                  18:00
                </div>
              </div>
              <div className="flex justify-left items-center">
                <CalendarIcon className="h-7 w-7" />
                <div className="text-lg ">5 Mon</div>
              </div>
              <div className="flex justify-left items-center">
                <LocationMarkerIcon className="h-7 w-7" />
                <div className="text-lg ">A1 - F2</div>
              </div>
            </div>
          </div> */}
					{/* <div className="rounded-md bg-white w-36 px-6 py-12 drop-shadow-md">
            <div className="text text-center font-SofiaProBold grid grid-rows-3">
              <div className="absolute right-0 top-0 p-3 hidden">
                <StatusOnlineIcon className="h-7 w-7 text-red" />
              </div>
              <div className="flex justify-left items-center">
                <ClockIcon className="h-7 w-7" />
                <div className="text-left text-sm">
                  12:00 <br />
                  18:00
                </div>
              </div>
              <div className="flex justify-left items-center">
                <CalendarIcon className="h-7 w-7" />
                <div className="text-lg ">5 Mon</div>
              </div>
              <div className="flex justify-left items-center">
                <LocationMarkerIcon className="h-7 w-7" />
                <div className="text-lg ">A1 - F2</div>
              </div>
            </div>
          </div> */}
				</div>
			</div>

			{/* <div className="p-4 block fixed bottom-16 inset-x-0">
        <div className="text-sm text-gray text-center font-SofiaProLight p-2">
          8/24 tables available
        </div>
        <button className="rounded-full bg-purple text-white p-4 w-full">
          Reserve a table
        </button>
      </div> */}
			<Menu />
		</>
	);
}

export default HomePage;