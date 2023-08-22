import thankYouImg from "../assets/illustration-thank-you.svg";

const Thanks = ({ rating }) => {
	return (
		<div className="flex flex-col justify-center items-center py-4">
			<div className="mt-2"><img src={thankYouImg} alt="thank-you" /></div>
			<p className="rounded-full w-fit px-6 py-[0.2rem] mt-10 bg-darkBlue text-Orange/80 text-para">{`You selected ${rating} out of 5`}</p>
			<h2 className="mt-10 text-3xl font-semibold">Thank you!</h2>
			<p className="text-mediumGrey mt-4 text-para font-medium text-center">
				We appreciate you taking the time to give a rating. If you ever
				need more support, don't hesitate to get in touch!
			</p>
		</div>
	);
};

export default Thanks;
