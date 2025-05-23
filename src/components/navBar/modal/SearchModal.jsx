import React, { useState } from "react";
import SearchIcon from "../../../assets/images/searchIcon.svg";
import RadioImg from "../../../assets/images/radioNotes.svg";
import Cancel from "../../../assets/images/cancel.svg";

const SearchModal = ({ onClose }) => {
	const [form, setForm] = useState({
		title: "",
		author: "",
		pages: "",
		published: false,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setForm({
			...form,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// handle form submission
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
			<div className="text-black w-full lg:w-[90vw] lg:h-[80vh] mx-4 md:mx-8 rounded-3xl shadow-xl flex flex-col lg:flex-row overflow-hidden">
				{/* Left Section: Form */}
				<div className="w-full lg:w-1/2 p-6">
					<form onSubmit={handleSubmit} className="flex items-center">
						<input
							name="title"
							value={form.title}
							onChange={handleChange}
							placeholder="Search"
							className="flex-grow p-2 rounded border border-gray-300 bg-gray-300 mr-2 outline-none caret-red-500"
							required
						/>
						<button
							type="submit"
							className="w-10 h-10 flex justify-center items-center mr-2 hover:scale-105 transition-transform"
						>
							<img src={SearchIcon} alt="Search" />
						</button>
						<button
							type="button"
							onClick={onClose}
							className="text-md bg-gray-800 w-10 h-10 p-2 rounded-full text-white hover:bg-red-700 hover:scale-105 transition-transform"
						>
							<img src={Cancel} alt="cancel" />
						</button>
					</form>

					{/* Extra content can go here */}
					<section className="mt-6 h-48 rounded-lg"></section>
				</div>

				{/* Right Section: Image */}
				<div className="w-full lg:w-1/2 flex items-center justify-center p-6">
					<img
						src={RadioImg}
						alt="radio"
						className="max-w-full max-h-80 lg:max-h-full object-contain hover:rotate-12 hover:scale-105 transition-transform"
					/>
				</div>
			</div>
		</div>
	);
};

export default SearchModal;
