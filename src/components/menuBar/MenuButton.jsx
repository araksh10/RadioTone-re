import { Link } from "react-router-dom";

const MenuButton = ({ optName }) => {
	return (
		<div className="hover:bg-zinc-800 p-2 rounded-r-full rounded-tl-full active:bg-gray-900">
			<Link to={`/RadioTone/${optName}`}>
				<button>{optName}</button>
			</Link>
		</div>
	);
};

export default MenuButton;
