import {useAuth0} from "@auth0/auth0-react";
import {
	CursorClickIcon,
	DesktopComputerIcon,
	SearchIcon,
	ServerIcon,
	VideoCameraIcon,
	XCircleIcon
} from "@heroicons/react/outline";
import React, {useEffect, useState} from "react";
import DateTimePicker from "react-datetime-picker";
import Workspace from "../../../entities/WorkspaceEntity";

const CreateReservation = () => {
	const {user} = useAuth0();

	const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
	const [workspace, setWorkspace] = useState<Workspace>();

	const [start, setStart] = useState<Date>(new Date());
	const [end, setEnd] = useState<Date>(
		new Date(new Date().setHours(new Date().getHours() + 1))
	);

	const refresh = async () => {
		fetch("http://localhost:3001/workspace", {method: "GET", mode: "cors"})
			.then((result) => result.json())
			.then((data) => {
				console.log(data);
				setWorkspaces(data);
			});
	};

	const select = async (id: number) => {
		fetch(`http://localhost:3001/workspace/${id}`, {
			method: "GET",
			mode: "cors",
		})
			.then((result) => result.json())
			.then((data) => {
				console.log(data);
				setWorkspace(data);
			});
	};

	const reserve = async () => {
		fetch("http://localhost:3001/reservation/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				userId: user?.sub,
				workspace: workspace,
				start: start,
				end: end,
			}),
		})
			.then((result) => result.json())
			.then((data) => {
				console.log(data);
			});
	};

	useEffect(() => {
		refresh();
	}, []);

	return (
		<div className="flex flex-col">
			<div className="flex flex-col bg-gray-200 p-6 pb-28">
				<div className="flex flex-col space-y-4">
					<span className="text-2xl font-bold">Search for a workspace</span>
					<div className="flex flex-row bg-gray-300 rounded overflow-hidden items-center">
						<SearchIcon className="h-8 m-1 text-gray-500"/>
						<input
							className="flex-1 py-2 bg-transparent placeholder:text-gray-500 placeholder:italic"
							placeholder="Search for a workplace..."
						/>
						<XCircleIcon className="h-4 m-3 text-gray-500"/>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-4 md:w-[50rem] md:mx-auto gap-4 -mt-16">
				{workspaces.map((w, index) =>
					w.id === workspace ? (
						<div
							className="shadow aspect-square rounded flex items-center justify-center bg-red-500 text-white"
							key={index}
						>
							<div className="flex flex-row">
								<div className="flex-1 flex flex-col">
									<span className="font-bold">{w.title}</span>
									<span className="font-light italic">{w.building?.title}</span>
								</div>
							</div>
						</div>
					) : (
						<div
							className="shadow aspect-square rounded flex items-center justify-center bg-white"
							key={index}
							onClick={() => w.id && select(w.id)}
						>
							<div className="flex flex-row">
								<div className="flex-1 flex flex-col">
									<span className="font-bold">{w.title}</span>
									<span className="font-light italic">{w.building?.title}</span>
								</div>
							</div>
						</div>
					)
				)}
			</div>

			{workspace && (
				<div
					className="fixed left-0 right-0 bottom-0 bg-white rounded-t-xl border border-gray-200 p-4 flex flex-col space-y-4">
					<div className="p-2">
						<div className="bg-gray-400 rounded w-20 h-1 mx-auto" onClick={() => setWorkspace(undefined)}/>
					</div>

					<div className="flex flex-row justify-between">
						<span className="text-gray-500 font-bold">Location</span>
						<span className="">{workspace.building?.address}</span>
					</div>

					<div className="flex flex-row justify-between">
						<span className="text-gray-500 font-bold">Accessories</span>
						<ul className="flex flex-row space-x-1">
							<li>
								<DesktopComputerIcon className="h-6"/>
							</li>
							<li>
								<VideoCameraIcon className="h-6"/>
							</li>
							<li>
								<ServerIcon className="h-6"/>
							</li>
							<li>
								<CursorClickIcon className="h-6"/>
							</li>
						</ul>
					</div>

					<div className="flex flex-row justify-between">
						<span className="text-gray-500 font-bold">Start</span>
						<DateTimePicker value={start} onChange={setStart}/>
					</div>

					<div className="flex flex-row justify-between">
						<span className="text-gray-500 font-bold">End</span>
						<DateTimePicker value={end} onChange={setEnd}/>
					</div>

					<button
						className="w-full p-4 bg-red-500 text-white font-bold block"
						onClick={reserve}
					>
						Reserve
					</button>
				</div>
			)}
		</div>
	);
};

export default CreateReservation;
