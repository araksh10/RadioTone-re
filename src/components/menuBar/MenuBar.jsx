import React from "react";
import MenuButton from "./MenuButton";

const MenuBar = () => {
	return (
		<div className="flex flex-col justify-between h-full w-full text-white p-2 my-4">
			<div className="flex flex-col justify-evenly h-2/3">
				<MenuButton optName="HOME" />
				<MenuButton optName="GENRE" />
				<MenuButton optName="SINGER" />
				<MenuButton optName="PRODUCTION" />
			</div>
			<div className="flex flex-col justify-evenly h-1/3 my-4">
				<MenuButton optName="ABOUT" />
				<MenuButton optName="CREDITS" />
			</div>
		</div>
	);
};

export default MenuBar;
