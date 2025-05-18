import Suggestions from "../components/suggestions/Suggestions";
import BackGround from "../assets/radiotone-bg.svg";

const Home = () => {
	return (
		<div className="flex flex-row w-full">
			<div className="w-4/5 flex justify-center items-center p-4">
				<img
					src={BackGround}
					alt="background"
					className="max-w-full max-h-full object-contain rounded-lg shadow-md hover:scale-105 transition-transform"
				/>
			</div>

			<div className="w-1/5 p-2">
				<Suggestions />
			</div>
		</div>
	);
};

export default Home;
