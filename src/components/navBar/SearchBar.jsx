import React, { useState } from "react";
import SearchBarImg from "../../assets/searchBar.svg";
import SearchModal from "./modal/SearchModal";

const SearchBar = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div>
			<div onClick={() => setShowModal(true)}>
				<img
					className="size-fit hover:scale-110 transition-transform"
					src={SearchBarImg}
					alt="search bar"
				/>
			</div>
			{showModal && <SearchModal onClose={() => setShowModal(false)} />}
		</div>
	);
};

export default SearchBar;
