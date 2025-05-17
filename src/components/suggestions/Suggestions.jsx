import React from "react";
import SuggestCard from "./SuggestCard";

const Suggestions = () => {
	return (
		<div className="text-white">
			<p className="bg-gray-800 p-2 rounded-l-full rounded-tr-full pl-8">
				Suggestions
			</p>
			<div className="ml-4 my-3">
				<SuggestCard />
				<SuggestCard />
				<SuggestCard />
				<SuggestCard />
				<SuggestCard />
				<SuggestCard />
				<SuggestCard />
			</div>
		</div>
	);
};

export default Suggestions;
