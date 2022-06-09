

import { ExclamationCircleIcon, HomeIcon, UserGroupIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

function Menu() {
	return (
		<div className="block fixed bottom-0 inset-x-0 p-4 grid grid-cols-3 gap-4 border-t-2 border-light-gray bg-white">
			<Link to="/" className="flex justify-center">
				<HomeIcon className="h-7 w-7"/>
			</Link>
			<Link to="/workspaces" className="flex justify-center">
				<UserGroupIcon className="h-7 w-7"/>
			</Link>
			<Link to="/issues" className="flex justify-center">
				<ExclamationCircleIcon className="h-7 w-7"/>
			</Link>
		</div>
	);
}

export default Menu;