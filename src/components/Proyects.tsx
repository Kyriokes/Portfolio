export const Proyects = () => {
	const handleClickPoke = () => {
		window.open("https://pokemonappbysfb-omega.vercel.app/", "_blank");
	};

	const handleClickChill = () => {
		window.open("https://chillingtime.co/", "_blank");
	};

	return (
		<div>
			<div className="relative my-2 w-full h-[200%]">
				<div
					className="absolute top-0 left-0 w-full h-full z-10 cursor-pointer"
					onClick={handleClickPoke}
				/>
				<iframe
					src="https://pokemonappbysfb-omega.vercel.app/"
					title="Mini Poke"
					className="h-[200%] w-[100%] "
				/>
			</div>

			<div className="relative my-2 w-full h-[200%]">
				<div
					className="absolute top-0 left-0 w-full h-full z-10 cursor-pointer"
					onClick={handleClickChill}
				/>
				<iframe
					src="https://chillingtime.co/"
					title="Mini Chill"
					className="h-[200%] w-[100%]"
				/>
			</div>
		</div>
	);
};
