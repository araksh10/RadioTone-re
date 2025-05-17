import React from "react";

const MenuButton = ({ optName }) => {
	return (
		<div className="hover:bg-gray-800 p-2 rounded-r-full rounded-tl-full active:bg-gray-900">
			<button>{optName}</button>
		</div>
	);
};

export default MenuButton;
