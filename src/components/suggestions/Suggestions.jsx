import React from "react";
import SuggestCard from "./SuggestCard";

const Suggestions = () => {
	return (
		<div className="">
			<div className="backdrop-blur-2xl sticky top-32">
				<p className="ml-24 px-4 py-4 rounded-l-full bg-neutral-700 tracking-[10px]">SUGGESTIONS</p>
			</div>
			<div className="overflow-hidden overflow-y-scroll">
				<SuggestCard />
				<SuggestCard />
				<SuggestCard />
				<SuggestCard />
				<SuggestCard />
				<SuggestCard />
				<SuggestCard />
				<SuggestCard />
				<SuggestCard />
				<SuggestCard />
				<SuggestCard />
				<SuggestCard />
				<SuggestCard />
				<SuggestCard />
				<SuggestCard />
				<SuggestCard />
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
