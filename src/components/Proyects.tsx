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
		<div className="grid grid-rows-subgrid">
			<div
				onClick={pokeToggleBox}
				className="flex place-content-between mt-10 mb-4"
			>
				<button className="text-xl font-bold text-center">
					Pokemon
				</button>
				<button className="border">
					{pokeIsVisible ? <ArrowU /> : <ArrowD />}
				</button>
			</div>
			{pokeIsVisible && (
				<article>
					<div className="relative mb-4 w-full">
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
					<p className="text-s font-bold text-center mb-4">
						Mi primer proyecto es una aplicación que permite crear y
						buscar Pokémon, ofreciendo una experiencia interactiva y
						divertida. Utilicé una combinación de React y Express,
						junto con una base de datos PostgreSQL, para desarrollar
						esta aplicación desde cero.
					</p>
				</article>
			)}
			<div className="flex flex-wrap w-fit">
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
				className="flex place-content-between mt-10 mb-4"
			>
				<button className="text-xl font-bold text-center">
					ChillingTime
				</button>
				<button className="border">
					{ctIsVisible ? <ArrowU /> : <ArrowD />}
				</button>
			</section>
			{ctIsVisible && (
				<article>
					<div className="relative mb-4 w-full">
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
					<p className="text-s font-bold text-center mb-4">
						En mi segundo proyecto grupal, contribuí a la primera
						versión de una página web dedicada a reservas para
						espacios VIP en aeropuertos. Mi enfoque principal estuvo
						en el desarrollo del backend, donde trabajé con
						tecnologías como JavaScript, PostgreSQL, Prisma y
						Node.js para asegurar un sólido sistema de gestión de
						reservas y usuarios. Además, colaboré en aspectos del
						frontend utilizando Next.js, HTML y Tailwind CSS para
						crear una interfaz de usuario atractiva y funcional.
					</p>
				</article>
			)}
			<div className="flex flex-wrap transform:translate-x-1000 transition-transform w-full">
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
