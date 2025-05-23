import RadioToneLogo from "../../assets/images/radiotone-01.svg";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";

const NavBar = () => {
	return (
		<div className="flex flex-row justify-between px-4 sticky top-0 z-100 bg-black">
			<div className="w-1/3">
				<Link to={"/RadioTone-re"} >
				<img
					className="size-16 shrink-0 hover:scale-110 transition-transform"
					src={RadioToneLogo}
					alt="radiotone"
				/>
				</Link>
			</div>
			<div className="w-1/3">
				<SearchBar />
			</div>
			<div className="w-1/3">{/* future Update */}</div>
		</div>
	);
};

export default NavBar;
