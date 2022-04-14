import { CubeTransparentIcon} from "@heroicons/react/outline";
import React from "react";

function PlaceholderBlock({title = "Placeholder", className = ""}: {title?: string, className?: string}) {
	return (
		<div className={"border-4 border-dashed border-gray-200 rounded-lg p-8 flex items-center justify-center " + className}>
			<CubeTransparentIcon className="h-5 w-5 m-2"/>
			{title}
		</div>
	);
}

export default PlaceholderBlock;