

import {ExclamationCircleIcon, HomeIcon, UserGroupIcon} from "@heroicons/react/outline";
import React from "react";

function Menu() {
	return (
		<div className="block fixed bottom-0 inset-x-0 p-4 grid grid-cols-3 gap-4 border-t-2 border-light-gray bg-white">
			<a href="google.com" className="flex justify-center">
				<HomeIcon className="h-7 w-7"/>
			</a>
			<a href="google.com" className="flex justify-center">
				<UserGroupIcon className="h-7 w-7"/>
			</a>
			<a href="google.com" className="flex justify-center">
				<ExclamationCircleIcon className="h-7 w-7"/>
			</a>
		</div>
	);
}

export default Menu;