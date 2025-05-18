import Home from "./pages/Home";
import Genre from "./pages/Genre";
import PageNotFound from "./pages/PageNotFound";
import NavBar from "./components/navBar/NavBar";
import MenuBar from "./components/menuBar/MenuBar";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BRouter>
			<div className="min-h-screen w-full bg-black text-white overflow-hidden select-none">
				<div className="mx-4 bg-black rounded-xl shadow-lg">
					<NavBar />

					<div className="flex flex-row w-full h-[90vh] rounded-b-xl">
						<div className="w-1/6 p-2">
							<MenuBar />
						</div>

						<Routes>
							<Route path="/RadioTone/" element={<Home />} />
							<Route path="/RadioTone/HOME" element={<Home />} />
							<Route path="/RadioTone/GENRE" element={<Genre />} />
							<Route path="/RadioTone/*" element={<PageNotFound />} />
						</Routes>
					</div>
				</div>
			</div>
		</BRouter>
	);
}

export default App;
