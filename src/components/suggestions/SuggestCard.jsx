import React from "react";
import RtDemo from "../../assets/radiotone-bg.svg";

const SuggestCard = () => {
	return (
		<div className="flex flex-row m-2">
			<div>
				<img
					className="size-16 rounded-md bg-neutral-700 border-white"
					src={RtDemo}
					alt="radiotone card image"
				/>
			</div>
			<div className="mx-2 tracking-wide">
				<h2 className="text-xl font-bold">Music Name</h2>
				<p className="text-gray-400 italic">Artist</p>
			</div>
		</div>
	);
};

export default SuggestCard;
