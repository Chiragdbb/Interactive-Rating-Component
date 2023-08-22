import thankYouImg from "../assets/illustration-thank-you.svg";

const Thanks = ({ rating }) => {
	return (
		<div className="flex flex-col justify-center items-center py-3 mobile:py-4">
			<div className="mt-1 mobile:mt-2"><img src={thankYouImg} alt="thank-you" /></div>
			<p className="rounded-full w-fit px-3 mobile:px-6 pb-[0.1rem] pt-[0.25rem] mobile:pb-[0.2rem] mobile:pt-[0.35rem] mt-6 mobile:mt-10 bg-darkBlue text-Orange/80 text-sm mobiel:text-para">{`You selected ${rating} out of 5`}</p>
			<h2 className="mt-8 mobile:mt-10 text-2xl mobile:text-3xl font-semibold">Thank you!</h2>
			<p className="text-mediumGrey mt-2 mobile:mt-4 text-sm mobile:text-para font-medium text-center">
				We appreciate you taking the time to give a rating. If you ever
				need more support, don't hesitate to get in touch!
			</p>
		</div>
	);
};

export default Thanks;
