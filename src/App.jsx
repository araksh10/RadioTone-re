import Home from "./pages/Home";
import Genre from "./pages/Genre";
import PageNotFound from "./pages/PageNotFound";
import NavBar from "./components/navBar/NavBar";
import MenuBar from "./components/menuBar/MenuBar";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import {useState} from "react";
import Player from "./pages/Player.jsx";

function App() {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<BRouter>
			<div className="bg-black text-white min-w-svw min-h-svh">

				<NavBar />

				<div className="flex flex-col md:flex-row">
					<div className=" sticky top-16 z-50 backdrop-blur-2xl">
						<button className="z-50 px-4 py-4 rounded-r-full bg-neutral-700 tracking-[10px] active:border-red-700 active:text-red-700"
						onClick={() => {setShowMenu(!showMenu)}}
						>
							MENU
						</button>
						{ showMenu && <MenuBar /> }
					</div>

					<Routes>
						<Route path="/RadioTone-re/" element={<Home />} />
						<Route path="/RadioTone-re/home" element={<Home />} />
						<Route path="/RadioTone-re/genre" element={<Genre />} />
						<Route path="/RadioTone-re/*" element={<PageNotFound />} />
						<Route path="/RadioTone-re/Player" element={<Player />} />
					</Routes>
				</div>

			</div>
		</BRouter>
	);
}

export default App;
