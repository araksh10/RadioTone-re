import { Link } from "react-router-dom";

const MenuButton = ({ optName }) => {
	return (
			<Link to={`/RadioTone-re/${optName.toLowerCase()}`}>
		<div className="hover:bg-zinc-800 py-2 px-4 w-[200px] active:bg-gray-900">
				<button>{optName}</button>
		</div>
			</Link>
	);
};

export default MenuButton;
