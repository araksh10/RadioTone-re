import React from "react";
import "../App.css";
import NavBar from "../components/navBar/NavBar";
import MenuBar from "../components/menuBar/MenuBar";
import Statue from "../assets/genre-bg.svg";
import BoomBox from "../assets/boombox.svg";
import Guiter from "../assets/guiter.svg";

const Genre = () => {
	return (
		<div className="min-h-screen w-full bg-black text-white overflow-hidden select-none">
			<div className="mx-4 bg-black rounded-xl shadow-lg">
				<NavBar />

				<div className="flex flex-row w-full h-[90vh] rounded-b-xl">
					<div className="w-1/6 p-2">
						<MenuBar />
					</div>

					<div className="h-[70vh] bg-zinc-900 mt-10 p-3 pt-0 pl-0 rounded-3xl rounded-tl-full rounded-br-full">
						<div className="relative mt-20 backdrop-blur-xs bg-white/10 rounded-3xl rounded-tl-none rounded-br-[50%] p-10 w-[30rem] h-[70vh] text-white shadow-lg z-10">
							<h2 className="absolute -top-10 -right-10 w-48 h-48 rounded-full border-4 border-zinc-900 border-s-12 bg-neutral-700 text-center flex items-center justify-center text-2xl font-semibold hover:rotate-z-360 transition-transform">
								GENRE
							</h2>

							<ul className="mt-20 text-center space-y-4 text-md font-light">
								<li>• Chill / Lo-fi</li>
								<li>• Retro / Synthwave / 80s</li>
								<li>• Indie / Alt-Rock</li>
								<li>• Jazz / Blues</li>
								<li>• EDM / Dance</li>
								<li>• Hip-Hop / R&B</li>
								<li>• Classic Rock</li>
								<li>• Global / World Music</li>
								<li>• Something energetic or mellow?</li>
							</ul>

							<img
								src={BoomBox}
								className="absolute bottom-[30px] right-[30px] w-48 hover:rotate-12 transition-transform"
							/>
						</div>
					</div>

					<div className="flex-1 flex flex-col justify-end items-end text-white ml-80">
						<img
							src={Statue}
							className="mt-10 w-4/3 hover:scale-105 transition-transform"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Genre;
