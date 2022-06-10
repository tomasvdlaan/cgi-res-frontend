import {Link, Outlet} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";
import {CheckIcon, XIcon} from "@heroicons/react/outline";
import Menu from "../../../glob-components/Menu";
import Problem from "../../../entities/ProblemEntity";
import problemEntity from "../../../entities/ProblemEntity";

function IssuesOverviewPage() {
	const {
		user,
		isAuthenticated,
		loginWithRedirect,
		logout,
		getAccessTokenSilently,
	} = useAuth0();

	const [problems, setProblems] = useState<Problem[]>([]);
	const [selectedDate, setSelectedDate] = useState<{
		date: number;
		month: string;
	}>({date: 16, month: "May"});

	const [start, setStart] = useState<Date>(new Date());
	const [end, setEnd] = useState<Date>();

	const refresh = async () => {
		let url = "http://localhost:3001/problem?includePast=true";

		if (start) url += `&start=${start.toISOString()}`;
		if (end) url += `&end=${end.toISOString()}`;

		fetch(url, {
			method: "GET",
			mode: "cors",
		})
			.then((result) => result.json())
			.then((data) => {
				setProblems(data);
			});
	};

	// const updateProblems = (key: keyof problemEntity, value: any) => {
	// 	setProblems({ ...problems, [key]: value });
	// };

	function closeProblem(id: number | undefined) {
		alert(id);

		//
		// fetch(`http://localhost:3001/problem/${id}`, {
		// 	method: "GET",
		// 	mode: "cors",
		// })
		// 	.then((result) => result.json())
		// 	.then((data) => {
		// 		console.log(data);
		// 		// updateProblems(data);
		// 	});

	}

	useEffect(() => {
		refresh();
	}, [start, end]);

	return (
		<>
			<div className="flex flex-col">
				<div className="flex flex-col bg-gray-200 p-6 pb-28">
					<div className="flex flex-col space-y-4">
						<span className="text-2xl font-bold">Overview Issues</span>
						<Link to="/issues/create" className="ml-4 bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
							Report issue
						</Link>
					</div>

					<div className="flex flex-row space-x-4 mt-4">
						<div className="flex-1 flex flex-col">
							<span>Start</span>
							<DateTimePicker value={start} onChange={setStart}/>
						</div>
						<div className="flex-1 flex flex-col">
							<span>End</span>
							<DateTimePicker value={end} onChange={setEnd}/>
						</div>
					</div>
				</div>

				<div className="flex flex-col space-y-2 p-4 -mt-16">
					{problems.map((r) => (
						// eslint-disable-next-line react/jsx-key
						<div>
							{moment(r.createdAt) < moment(new Date()) ? (
								<div
									className="rounded border border-gray-200 bg-gray-100 px-4 p-2 flex flex-row items-center space-x-4 justify-between">
									<div className="flex flex-col">
										<div className="space-x-1 flex flex-row items-center">
											<span className="font-bold">{r.title}</span>
											{/*<span className="font-bold">idk title</span>*/}
											{r.solvedAt ? (
												<span className="text-emerald-500">
													<CheckIcon className="h-4"/>
												</span>
											) : (
												<span className="text-rose-500">
													<XIcon className="h-4"/>
												</span>
											)}
										</div>
										<span className="font-light italic">
											{r.description}
										</span>
									</div>

									<span>
										{moment(r.createdAt).format("D MMMM HH:mm")} -{" "}
										{moment(r.createdAt).format("HH:mm")}
										{r.solvedAt ? (
											<button
												className="mx-6 bg-transparent text-green-700 font-semibold rounded">
												Solved
											</button>
										) : (
											<button onClick={() => closeProblem(r.id)}
												className="ml-4 bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
												Closed
											</button>
										)}
									</span>
								</div>
							) : moment(r.createdAt) < moment(new Date()) ? (
								<div
									className="rounded border border-gray-100 bg-white px-4 p-2 flex flex-row items-center space-x-4 justify-between">
									<div className="flex flex-col">
										<div className="space-x-2 flex flex-row items-center">
											<span className="font-bold">{r.title}</span>
											<span className="flex h-3 w-3 relative">
												<span
													className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
												<span
													className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
											</span>
											<span className="font-light italic text-gray-500">Now active</span>
										</div>
										<span className="font-light italic">
											{r.description}
										</span>
									</div>

									<span>
										{moment(r.createdAt).format("D MMMM HH:mm")} -{" "}
										{moment(r.createdAt).format("HH:mm")}
									</span>
								</div>
							) : (
								<div
									className="rounded border border-gray-100 bg-white px-4 p-2 flex flex-row items-center space-x-4 justify-between">
									<div className="flex flex-col">
										<span className="font-bold">{r.title}</span>
										<span className="font-light italic">
											{r.title}

										</span>
									</div>

									<span>
										{moment(r.createdAt).format("D MMMM HH:mm")} -{" "}
										{moment(r.createdAt).format("HH:mm")}
									</span>
								</div>
							)}
						</div>
					))}
				</div>
			</div>

			<Menu/>
		</>
	);
}

export default IssuesOverviewPage;