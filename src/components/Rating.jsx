import { useState } from "react";
import star from "../assets/icon-star.svg";
import Thanks from "./Thanks";

const Rating = () => {
	const [rating, setRating] = useState("");
	const [submitted, setSubmitted] = useState(false);

	function ratingHandler(e) {
		setRating(e.target.value);
		console.log(rating);
	}

	function submitHandler(e) {
		e.preventDefault();
		rating !== "" ? setSubmitted(true) : setSubmitted(false);
		console.log("Submitted Succesfully with Rating:", rating);
	}
	return (
		<div className="rad-grad w-[90vw] mobile:w-[410px] h-fit rounded-2xl p-6 mobile:p-8 text-white">
			{submitted && <Thanks rating={rating} />}
			{!submitted && (
				<div className="pb-2">
					<div className="w-[40px] h-[40px] rounded-full bg-darkBlue p-2 flex justify-center items-center">
						<img src={star} alt="star" />
					</div>
					<h1 className="mt-6 text-2xl font-semibold">
						How did we do?
					</h1>
					<p className="text-lightGrey mt-3 mobile:text-para text-sm">
						Please let us know how we did with your support request.
						All feedback is appreciated to help us improve our
						offering!
					</p>
					<form onSubmit={submitHandler} className="mt-6 mobile:mt-8">
						<div className="flex justify-between">
							<div>
								<label
									className={
										rating === "1"
											? "w-10 h-10 mobile:w-12 mobile:h-12 rounded-full flex justify-center items-center bg-lightGrey hover:bg-lightGrey hover:cursor-pointer group transition-colors duration-150"
											: "bg-darkBlue w-10 h-10 mobile:w-12 mobile:h-12 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-Orange group transition-colors duration-150"
									}
								>
									<span
										className={
											rating === "1"
												? "mt-[3px] text-white font-semibold text-lg"
												: "mt-[3px] text-mediumGrey font-semibold text-lg group-hover:text-white transition-colors duration-150 transition-colors duration-150"
										}
									>
										1
									</span>
									<input
										className="appearance-none"
										type="radio"
										onChange={ratingHandler}
										value="1"
										name="setRating"
									/>
								</label>
							</div>
							<div>
								<label
									className={
										rating === "2"
											? "w-10 h-10 mobile:w-12 mobile:h-12 rounded-full flex justify-center items-center bg-lightGrey hover:bg-lightGrey hover:cursor-pointer group"
											: "bg-darkBlue w-10 h-10 mobile:w-12 mobile:h-12 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-Orange group transition-colors duration-150"
									}
								>
									<span
										className={
											rating === "2"
												? "mt-[3px] text-white font-semibold text-lg"
												: "mt-[3px] text-mediumGrey font-semibold text-lg group-hover:text-white transition-colors duration-150"
										}
									>
										2
									</span>
									<input
										className="appearance-none"
										type="radio"
										onChange={ratingHandler}
										value="2"
										name="setRating"
									/>
								</label>
							</div>
							<div>
								<label
									className={
										rating === "3"
											? "w-10 h-10 mobile:w-12 mobile:h-12 rounded-full flex justify-center items-center bg-lightGrey hover:bg-lightGrey hover:cursor-pointer group"
											: "bg-darkBlue w-10 h-10 mobile:w-12 mobile:h-12 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-Orange group transition-colors duration-150"
									}
								>
									<span
										className={
											rating === "3"
												? "mt-[3px] text-white font-semibold text-lg"
												: "mt-[3px] text-mediumGrey font-semibold text-lg group-hover:text-white transition-colors duration-150"
										}
									>
										3
									</span>
									<input
										className="appearance-none"
										type="radio"
										onChange={ratingHandler}
										value="3"
										name="setRating"
									/>
								</label>
							</div>
							<div>
								<label
									className={
										rating === "4"
											? "w-10 h-10 mobile:w-12 mobile:h-12 rounded-full flex justify-center items-center bg-lightGrey hover:bg-lightGrey hover:cursor-pointer group"
											: "bg-darkBlue w-10 h-10 mobile:w-12 mobile:h-12 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-Orange group transition-colors duration-150"
									}
								>
									<span
										className={
											rating === "4"
												? "mt-[3px] text-white font-semibold text-lg"
												: "mt-[3px] text-mediumGrey font-semibold text-lg group-hover:text-white transition-colors duration-150"
										}
									>
										4
									</span>
									<input
										className="appearance-none"
										type="radio"
										onChange={ratingHandler}
										value="4"
										name="setRating"
									/>
								</label>
							</div>
							<div>
								<label
									className={
										rating === "5"
											? "w-10 h-10 mobile:w-12 mobile:h-12 rounded-full flex justify-center items-center bg-lightGrey hover:bg-lightGrey hover:cursor-pointer group"
											: "bg-darkBlue w-10 h-10 mobile:w-12 mobile:h-12 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-Orange group transition-colors duration-150"
									}
								>
									<span
										className={
											rating === "5"
												? "mt-[3px] text-white font-semibold text-lg"
												: "mt-[3px] text-mediumGrey font-semibold text-lg group-hover:text-white transition-colors duration-150"
										}
									>
										5
									</span>
									<input
										className="appearance-none"
										type="radio"
										onChange={ratingHandler}
										value="5"
										name="setRating"
									/>
								</label>
							</div>
						</div>
						<button className="w-full h-[2.75rem] pt-1 text-sm tracking-widest font-semibold bg-Orange hover:bg-white rounded-full flex items-center justify-center uppercase mt-6 hover:text-Orange transition-colors duration-150">
							Submit
						</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default Rating;
