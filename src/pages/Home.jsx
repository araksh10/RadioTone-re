import Suggestions from "../components/suggestions/Suggestions";
import BackGround from "../assets/radiotone-bg.svg";

const Home = () => {
	return (
		<div className="relative min-h-svh md:flex md:flex-row">
			<div className="fixed size-svw">
				<img
					src={BackGround}
					alt="background"
					className="fixed top-0 size-full"
				/>
			</div>

			<div className="sticky top-0 mt-[80svh] backdrop-blur-sm md:right-0 md:w-svw">
				<Suggestions />
			</div>
		</div>
	);
};

export default Home;
