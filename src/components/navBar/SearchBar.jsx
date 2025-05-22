import React, { useState } from "react";
import SearchModal from "./modal/SearchModal";

const SearchBar = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div>
			<div
				className="flex justify-center items-center w-full h-[30px] mt-4 rounded-full bg-neutral-700"
				onClick={() => setShowModal(true)}
			>
				<p className="bg-black h-full tracking-[15px] text-[20px] px-4  border-white border-x-4 rounded-full ">SEARC<span className="tracking-normal">H</span></p>
			</div>
			{showModal && <SearchModal onClose={() => setShowModal(false)}/>}
		</div>
	);
};

export default SearchBar;
