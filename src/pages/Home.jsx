import Suggestions from "../components/suggestions/Suggestions";
import BackGround from "../assets/images/radiotone-bg.svg";

const Home = () => {
	return (
		<div className="relative min-h-svh md:flex md:flex-row">
			<div className="fixed size-svw md:w-1/2">
				<img
					src={BackGround}
					alt="background"
					className="fixed top-0 size-full"
				/>
			</div>

			<div className="md:w-1/2 sticky top-0 mt-[70svh] bg-black/50 backdrop-blur-sm md:right-0 md:w-svw">
				<Suggestions />
			</div>
		</div>
	);
};

export default Home;
