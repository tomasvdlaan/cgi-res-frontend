import { QrcodeIcon } from "@heroicons/react/outline";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Workspace from "../../entities/WorkspaceEntity";
import Menu from "../../glob-components/Menu";

function WorkspaceDetails() {
	const { workspaceId: id } = useParams();

	const [workspace, setWorkspace] = useState<Workspace>();
	const [date, setDate] = useState<number>();

	const refresh = async () => {
		let url = `http://localhost:3001/workspace/${id}`;
		if (date) url += `?date=2022-05-${date}`;

		fetch(url, {
			method: "GET",
			mode: "cors",
		})
			.then((result) => result.json())
			.then((data) => {
				console.log(data);
				setWorkspace(data);
			});
	};

	useEffect(() => {
		refresh();
	}, [date]);

	const dates = [
		[0, 0, 0, 0, 0, 0, 1],
		[2, 3, 4, 5, 6, 7, 8],
		[9, 10, 11, 12, 13, 14, 15],
		[16, 17, 18, 19, 20, 21, 22],
		[23, 24, 25, 26, 27, 28, 29],
		[30, 31],
	];

	return (
		<>
			<div className="flex flex-col">
				<div className="flex flex-col bg-gray-200 p-6 pb-28">
					<div className="flex flex-col">
						<div className="space-x-2">
							<span className="text-2xl font-bold">{workspace?.title}</span>
							<span>{workspace?.building?.title}</span>
						</div>
						<span className="font-light italic">
							{workspace?.building?.address}
						</span>
					</div>
				</div>

				<div>
					<div className="w-auto mx-3 my-3 border-solid border-grey-light rounded border shadow-sm bg-white -mt-16">
						<div className="bg-grey-lighter px-2 py-2 border-solid border-grey-light border-b text-center">
              May 2022
						</div>
						<div className="">
							<table className="w-full">
								<tr className="border-b">
									<th className="py-3 px-4">S</th>
									<th className="py-3 px-4">M</th>
									<th className="py-3 px-4">T</th>
									<th className="py-3 px-4">W</th>
									<th className="py-3 px-4">T</th>
									<th className="py-3 px-4">F</th>
									<th className="py-3 px-4">S</th>
								</tr>
								{dates.map((w) => (
									// eslint-disable-next-line react/jsx-key
									<tr>
										{w.map((d) =>
											d === date ? (
												<td className="py-3 px-4 hover:bg-blue hover:text-white text-center cursor-pointer rounded transition-all duration-300 bg-sky-400 text-white">
													{d !== 0 && <span>{d}</span>}
												</td>
											) : (
												<td
													className="py-3 px-4 hover:bg-blue hover:text-gray-400 text-center cursor-pointer rounded transition-all duration-300"
													onClick={() => setDate(d)}
												>
													{d !== 0 && <span>{d}</span>}
												</td>
											)
										)}
									</tr>
								))}
							</table>
						</div>
					</div>
				</div>

				<div className="flex flex-col p-4 space-y-6">
					{workspace?.reservations?.length
						? workspace?.reservations.map((r) => (
							// eslint-disable-next-line react/jsx-key
							<div className="border border-gray-300 rounded p-4 flex-1 flex flex-row space-x-4 items-center">
								<div className="flex-1">{r.userId}</div>
								<div>
									{moment(r.start).format("HH:mm")} -{" "}
									{moment(r.end).format("HH:mm")}
								</div>
								<Link to={`/reservations/code/${r.id}`}>
									<QrcodeIcon className="h-6" />
								</Link>
							</div>
						))
						: date && (
							<div>
								<span className="text-gray-500 font-light">
                    No reservations for{" "}
								</span>
								<span>{date} May 2022</span>
							</div>
						)}
					<div>
						<span className="text-red-500 my-4">Create a new reservation</span>
					</div>
				</div>
			</div>
			<Menu />
		</>
	);
}

export default WorkspaceDetails;
