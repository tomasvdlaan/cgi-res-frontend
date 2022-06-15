import {useParams} from "react-router-dom";
import React, {useState} from "react";
import Problem from "../../../entities/ProblemEntity";
// import problemEntity from "../../../entities/ProblemEntity";
import TextInput from "../../../glob-components/TextInput";
import DateInput from "../../../glob-components/DateInput";
import Menu from "../../../glob-components/Menu";

function IssueCreatePage() {
	const {id} = useParams();

	const [problems, setProblems] = useState<Problem[]>([]);

	const updateProblems = (key: keyof Problem, value: unknown) => {
		setProblems({...problems, [key]: value});
	};

	const submit = () => {
		console.log(JSON.stringify(problems),);
		fetch("http://localhost:3001/problem/create", {
			method: "POST",
			mode: "cors",
			body: JSON.stringify(problems),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((result) => result.json())
			.then((data) => updateProblems("id", data.id));
	};

	return (
		<div>
			<div className="flex flex-col">
				<div className="flex flex-col bg-gray-200 p-6 pb-28">
					<div className="flex flex-col space-y-4">
						<span className="text-2xl font-bold">Report Issue</span>
					</div>
				</div>
			</div>

			<div className="flex flex-col space-y-2 p-4 -mt-16">
				<div className="border border-gray-200 rounded-xl m-8 bg-white">
					<div className="px-4">
						<div>
							<div className="flex flex-row justify-between">
								<h1 className="py-4 font-bold text-xl">Reservation</h1>
								<div className="my-auto">
									<button
										className="bg-slate-100 rounded px-4 py-2"
										onClick={submit}>
                                        Save
									</button>
								</div>
							</div>
							<hr/>
						</div>
					</div>

					<div className="p-4 flex flex-col space-y-4">
						<TextInput title="Title" onChange={(text) => updateProblems("title", text)}
						/>
						<TextInput
							title="Description"
							onChange={(text) => updateProblems("description", text)}
						/>
						<DateInput title="Solved" placeholder="End date and time of reservation"
							onChange={(datetime) => updateProblems("solvedAt", datetime)}/>
						<label htmlFor="priority">Priority:</label>
						<select id="priority" name="priority" className="w-full flex flex-col"
							onChange={(event) => updateProblems("priority", event.target.value)}>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</div>
				</div>
			</div>
			<Menu/>
		</div>
	);
}


export default IssueCreatePage;

