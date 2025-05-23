import NotFound from "../assets/images/notFound.svg";

const PageNotFound = () => {
	return (
		<div className="flex justify-center items-center w-full animate-pulse">
			<img className="w-[50vw]" src={NotFound} alt="404 URL not found" />
		</div>
	);
};

export default PageNotFound;
