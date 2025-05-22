import React from "react";
import MenuButton from "./MenuButton";

const MenuBar = () => {
	return (
		<div className="h-full w-full md:w-[200px] md:h-[50svh] text-white z-10">

			<div className="flex flex-row justify-between md:flex-col">
				<div className="">
					<MenuButton optName="HOME"/>
					<MenuButton optName="GENRE"/>
					<MenuButton optName="SINGER"/>
					<MenuButton optName="PRODUCTION"/>
				</div>
				<div className="">
					<MenuButton optName="ABOUT"/>
					<MenuButton optName="CREDITS"/>
				</div>
			</div>
		</div>
	);
};

export default MenuBar;
