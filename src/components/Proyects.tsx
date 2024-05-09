import pokemon from "../assets/pokemon.jpg";
import ctime from "../assets/ctime.jpg";
import { useState } from "react";
import {
	ArrowA,
	ArrowD,
	ArrowU,
	CSSIcon,
	ExpressIcon,
	GitHubIcon,
	GitIcon,
	HTMLIcon,
	JavaScriptIcon,
	NextIcon,
	NodeJSIcon,
	NPMIcon,
	PostgreSQLIcon,
	PrismaIcon,
	ReactIcon,
	ReduxIcon,
	TailwindIcon,
	VSCodeIcon,
} from "../assets/icons";

export const Proyects = () => {
	const [pokeIsVisible, setPokeIsVisible] = useState(false);
	const [ctIsVisible, setCtIsVisible] = useState(false);

	const pokeToggleBox = () => {
		setPokeIsVisible(!pokeIsVisible);
	};

	const ctToggleBox = () => {
		setCtIsVisible(!ctIsVisible);
	};

	const handleClickPoke = () => {
		window.open("https://pokemonappbysfb-omega.vercel.app/", "_blank");
	};

	const handleClickChill = () => {
		window.open("https://chillingtime.co/", "_blank");
	};

	return (
		<div>
			<section
				onClick={pokeToggleBox}
				className="flex place-content-between my-4"
			>
				<button className="text-xl font-bold text-center">
					Pokemon
				</button>
				<button>{pokeIsVisible ? <ArrowU /> : <ArrowD />}</button>
			</section>
			{pokeIsVisible && (
				<article>
					<div className="relative my-2 w-full h-[200%]">
						<div
							className="absolute top-0 left-0 w-full h-full z-10 cursor-pointer"
							onClick={handleClickPoke}
						/>
						<img
							src={pokemon}
							title="Mini Poke"
							className=" brightness-50 h-[100%] w-[100%]"
							alt="Pokemon"
						/>
						<div className="absolute inset-0 flex items-center justify-center">
							<ArrowA />
							<div className="absolute inset-0 flex items-center justify-center">
								<p className="text-2xl font-bold text-center">
									tap
								</p>
							</div>
						</div>
					</div>
					<p className="text-s font-bold text-center">
						Mi primer proyecto es una aplicación que permite crear y
						buscar Pokémon, ofreciendo una experiencia interactiva y
						divertida. Utilicé una combinación de React y Express,
						junto con una base de datos PostgreSQL, para desarrollar
						esta aplicación desde cero.
					</p>
				</article>
			)}
			<div className="flex flex-row">
				<JavaScriptIcon />
				<PostgreSQLIcon />
				<ExpressIcon />
				<ReactIcon />
				<ReduxIcon />
				<HTMLIcon />
				<CSSIcon />
				<VSCodeIcon />
				<NodeJSIcon />
				<GitIcon />
				<GitHubIcon />
				<NPMIcon />
			</div>

			<section
				onClick={ctToggleBox}
				className="flex place-content-between my-4"
			>
				<button className="text-xl font-bold text-center">
					ChillingTime
				</button>
				<button>{ctIsVisible ? <ArrowU /> : <ArrowD />}</button>
			</section>
			{ctIsVisible && (
				<article>
					<div className="relative my-2 w-full h-[200%]">
						<div
							className="absolute top-0 left-0 w-full h-full z-10 cursor-pointer"
							onClick={handleClickChill}
						/>
						<img
							src={ctime}
							title="Mini Chill"
							className="brightness-50 h-[200%] w-[100%]"
							alt="ChillingTime"
						/>
						<div className="absolute inset-0 flex items-center justify-center">
							<ArrowA />
							<div className="absolute inset-0 flex items-center justify-center">
								<p className="text-2xl font-bold text-center">
									tap
								</p>
							</div>
						</div>
					</div>
				</article>
			)}
			<div className="flex flex-row">
				<JavaScriptIcon />
				<PostgreSQLIcon />
				<PrismaIcon />
				<NextIcon />
				<HTMLIcon />
				<TailwindIcon />
				<VSCodeIcon />
				<NodeJSIcon />
				<GitIcon />
				<GitHubIcon />
				<NPMIcon />
			</div>
		</div>
	);
};
