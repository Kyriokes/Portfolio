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
				<h2 className="text-xl font-bold text-center">Lenguajes</h2>
				<div className="mx-auto  p-3 gap-x-20 gap-y-6 flex flex-wrap justify-center">
					<a className="flex flex-col items-center" href="">
						<JavaScriptIcon />
						<h3>JavaScript</h3>
					</a>
					<a className="flex flex-col items-center" href="">
						<TypeScriptIcon />
						<h3>TypeScript</h3>
					</a>
				</div>
			</div>

			<div>
				<h2 className="text-xl font-bold text-center">Backend</h2>
				<div className="mx-auto  p-3 gap-x-20 gap-y-6 flex flex-wrap justify-center">
					<a className="flex flex-col items-center" href="">
						<NestIcon />
						<h3>Nest</h3>
					</a>
					<a className="flex flex-col items-center" href="">
						<PostgreSQLIcon />
						<h3>PostgreSQL</h3>
					</a>
					<a className="flex flex-col items-center" href="">
						<ExpressIcon />
						<h3>Express</h3>
					</a>
					<a className="flex flex-col items-center" href="">
						<PrismaIcon />
						<h3>Prisma</h3>
					</a>
				</div>
			</div>

			<div>
				<h2 className="text-xl font-bold text-center">Frontend</h2>
				<div className="mx-auto  p-3 gap-x-20 gap-y-6 flex flex-wrap justify-center">
					<a className="flex flex-col items-center" href="">
						<ReactIcon />
						<h3>React</h3>
					</a>
					<a className="flex flex-col items-center" href="">
						<ReduxIcon />
						<h3>Redux</h3>
					</a>
					<a className="flex flex-col items-center" href="">
						<ViteIcon />
						<h3>Vite</h3>
					</a>
					<a className="flex flex-col items-center" href="">
						<NextIcon />
						<h3>Next</h3>
					</a>
					<a className="flex flex-col items-center" href="">
						<HTMLIcon />
						<h3>HTML</h3>
					</a>
					<a className="flex flex-col items-center" href="">
						<CSSIcon />
						<h3>CSS</h3>
					</a>
					<a className="flex flex-col items-center" href="">
						<TailwindIcon />
						<h3>Tailwind</h3>
					</a>
				</div>
			</div>

			<div>
				<h2 className="text-xl font-bold text-center">Herramientas</h2>
				<div className="mx-auto  p-3 gap-x-20 gap-y-6 flex flex-wrap justify-center">
					<a className="flex flex-col items-center" href="">
						<VSCodeIcon />
						<h3>VSCode</h3>
					</a>
					<a className="flex flex-col items-center" href="">
						<NodeJSIcon />
						<h3>NodeJs</h3>
					</a>
					<a className="flex flex-col items-center" href="">
						<UnityIcon />
						<h3>Unity</h3>
					</a>
					<a className="flex flex-col items-center" href="">
						<GitIcon />
						<h3>Git</h3>
					</a>
					<a className="flex flex-col items-center" href="">
						<GitHubIcon />
						<h3>GitHub</h3>
					</a>
					<a className="flex flex-col items-center" href="">
						<NPMIcon />
						<h3>NPM</h3>
					</a>
					<a className="flex flex-col items-center" href="">
						<YARNIcon />
						<h3>YARN</h3>
					</a>
					<a className="flex flex-col items-center" href="">
						<NeonIcon />
						<h3>Neon</h3>
					</a>
				</div>
			</div>
		</div>
	);
}
