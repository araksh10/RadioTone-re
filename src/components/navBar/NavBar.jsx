import React from "react";
import radioTone from "../../assets/radiotone-01.svg";
import SearchBar from "./SearchBar";

const NavBar = () => {
	return (
		<div className="flex flex-row justify-between">
			<div className="flex flex-1/3">
				<img
					className="size-16 shrink-0 hover:scale-110 transition-transform"
					src={radioTone}
					alt="radiotone"
				/>
			</div>
			<div className="flex-1/3">
				<SearchBar />
			</div>
			<div className="flex-1/3">{/* future Update */}</div>
		</div>
	);
};

export default NavBar;
