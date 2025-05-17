import NavBar from "./components/navBar/NavBar";
import MenuBar from "./components/menuBar/MenuBar";
import Suggestions from "./components/suggestions/Suggestions";
import BackGround from "./assets/radiotone-bg.svg";

function App() {
	return (
		<div className="min-h-screen w-full bg-black text-white overflow-hidden select-none">
			<div className="m-4 bg-black rounded-xl shadow-lg">
				<NavBar />

				<div className="flex flex-row w-full h-[80vh] rounded-b-xl">
					{/* Left: MenuBar */}
					<div className="w-1/6 p-2">
						<MenuBar />
					</div>

					{/* Middle: Image */}
					<div className="w-4/6 flex justify-center items-center p-4">
						<img
							src={BackGround}
							alt="background"
							className="max-w-full max-h-full object-contain rounded-lg shadow-md"
						/>
					</div>

					{/* Right: Suggestions */}
					<div className="w-1/6 p-2">
						<Suggestions />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
