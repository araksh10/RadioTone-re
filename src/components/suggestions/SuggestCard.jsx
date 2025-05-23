import React from "react";
import RtDemo from "../../assets/demo.svg";
import {Link} from "react-router-dom";

const SuggestCard = () => {
	return (
		<Link to="/Radiotone-re/Player">
		<div className="flex flex-row m-2 hover:scale-105 active:scale-95 transition-transform">
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
		</Link>
	);
};

export default SuggestCard;
