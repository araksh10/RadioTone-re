import React from "react";
import RtDemo from "../../assets/radiotone-bg.svg";

const SuggestCard = () => {
	return (
		<div className="flex flex-row m-4 hover:scale-125 transition-transform hover:shadow-md shadow-gray-500">
			<div>
				<img
					className="size-16 ring-white ring-1 rounded-md"
					src={RtDemo}
					alt="radiotone card image"
				/>
			</div>
			<div className="ml-1">
				<h2 className="text-xl font-bold">Music Name</h2>
				<p className="text-gray-400 italic">Artist</p>
			</div>
		</div>
	);
};

export default SuggestCard;
