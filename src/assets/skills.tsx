import {
	JavaScriptIcon,
	TypeScriptIcon,
	NestIcon,
	PostgreSQLIcon,
	ExpressIcon,
	PrismaIcon,
	ReactIcon,
	ReduxIcon,
	ViteIcon,
	NextIcon,
	HTMLIcon,
	CSSIcon,
	TailwindIcon,
	VSCodeIcon,
	NodeJSIcon,
	UnityIcon,
	GitIcon,
	GitHubIcon,
	NPMIcon,
	YARNIcon,
	NeonIcon,
} from "./icons";

export function Skills() {
	return (
		<div className="columns-1">
			<div>
				<h2 className="text-xl font-bold text-center mb-6 mt-16">Lenguajes</h2>
				<div className="mx-auto  p-3 gap-x-20 gap-y-6 flex flex-wrap justify-center">
					<a className="flex flex-col items-center w-20" href="">
						<JavaScriptIcon />
						<h3>JavaScript</h3>
					</a>
					<a className="flex flex-col items-center w-20" href="">
						<TypeScriptIcon />
						<h3>TypeScript</h3>
					</a>
				</div>
			</div>

			<div>
				<h2 className="text-xl font-bold text-center mb-6 mt-16">Backend</h2>
				<div className="mx-auto  p-3 gap-x-20 gap-y-6 flex flex-wrap justify-center">
					<a className="flex flex-col items-center w-20" href="">
						<NestIcon />
						<h3>Nest</h3>
					</a>
					<a className="flex flex-col items-center w-20" href="">
						<PostgreSQLIcon />
						<h3>PostgreSQL</h3>
					</a>
					<a className="flex flex-col items-center w-20" href="">
						<ExpressIcon />
						<h3>Express</h3>
					</a>
					<a className="flex flex-col items-center w-20" href="">
						<PrismaIcon />
						<h3>Prisma</h3>
					</a>
				</div>
			</div>

			<div>
				<h2 className="text-xl font-bold text-center mb-6 mt-16">Frontend</h2>
				<div className="mx-auto  p-3 gap-x-20 gap-y-6 flex flex-wrap justify-center">
					<a className="flex flex-col items-center w-20" href="">
						<ReactIcon />
						<h3>React</h3>
					</a>
					<a className="flex flex-col items-center w-20" href="">
						<ReduxIcon />
						<h3>Redux</h3>
					</a>
					<a className="flex flex-col items-center w-20" href="">
						<ViteIcon />
						<h3>Vite</h3>
					</a>
					<a className="flex flex-col items-center w-20" href="">
						<NextIcon />
						<h3>Next</h3>
					</a>
					<a className="flex flex-col items-center w-20" href="">
						<HTMLIcon />
						<h3>HTML</h3>
					</a>
					<a className="flex flex-col items-center w-20" href="">
						<CSSIcon />
						<h3>CSS</h3>
					</a>
					<a className="flex flex-col items-center w-20" href="">
						<TailwindIcon />
						<h3>Tailwind</h3>
					</a>
				</div>
			</div>

			<div>
				<h2 className="text-xl font-bold text-center mb-6 mt-16">Herramientas</h2>
				<div className="mx-auto  p-3 gap-x-20 gap-y-6 flex flex-wrap justify-center">
					<a className="flex flex-col items-center w-20" href="">
						<VSCodeIcon />
						<h3>VSCode</h3>
					</a>
					<a className="flex flex-col items-center w-20" href="">
						<NodeJSIcon />
						<h3>NodeJs</h3>
					</a>
					<a className="flex flex-col items-center w-20" href="">
						<UnityIcon />
						<h3>Unity</h3>
					</a>
					<a className="flex flex-col items-center w-20" href="">
						<GitIcon />
						<h3>Git</h3>
					</a>
					<a className="flex flex-col items-center w-20" href="">
						<GitHubIcon />
						<h3>GitHub</h3>
					</a>
					<a className="flex flex-col items-center w-20" href="">
						<NPMIcon />
						<h3>NPM</h3>
					</a>
					<a className="flex flex-col items-center w-20" href="">
						<YARNIcon />
						<h3>YARN</h3>
					</a>
					<a className="flex flex-col items-center w-20" href="">
						<NeonIcon />
						<h3>Neon</h3>
					</a>
				</div>
			</div>
		</div>
	);
}
