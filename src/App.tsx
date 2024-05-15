import "./index.css";
import { Skills } from "./assets/skills";
import { NavBar } from "./components/NavBar";
import { Contact } from "./components/Contact";
import { Pdf } from "./components/Pdf";
import { pdfjs } from "react-pdf";
import { Proyects } from "./components/Proyects";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.js",
	import.meta.url
).toString();

function App() {
	return (
		<div className="bg-cBlack w-full h-full flex flex-col mt-[40px]">
			<NavBar />
			<div className="flex flex-col items-center justify-center text-cPlatinum flex-grow p-4 max-w-full mx-auto lg:max-w-[1023px] lg:gap-20">
				<div className="relative w-full my-10">
					<div className="absolute -inset-1 bg-gradient-to-b from-cGreen to-cTeal blur-2xl opacity-75"></div>
					<div id="vid" className="relative pb-2 my-10">
						<div className="">
							<h2 className="text-4xl text-center mb-4 align-text-bottom font-bold lg:text-6xl">
								¡Hola Mundo!
							</h2>
						</div>
						<div className=" m-0.5">
							{/* <iframe
								height="100%"
								width="100%"
								src="https://www.youtube.com/embed/9ZQFLB4Hlg0?si=SBXfl0YvrxAiquXs"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
							></iframe> */}

							<div className="container mx-auto p-8">
								<h2 className="text-3xl font-medium text-center">
									Soy un Desarrollador Full Stack con foco en
									JavaScript
								</h2>

								<p className="text-xl">
									Poseo sólidos conocimientos en React,
									Node.js, Sequelize, PostgreSQL y Prisma.
									Cuento con habilidades en GIT/Github, Unity
									y Blender. Mi formación multidisciplinaria
									me ha brindado excelentes capacidades
									analíticas que enriquecen mi trabajo como
									desarrollador.
								</p>

								<section className="mt-6">
									<h3 className="text-xl font-medium">
										Experiencia Profesional
									</h3>

									<ul className="mt-4">
										<li className="flex items-start">
											<h4 className="text-xl font-medium">
												Full Stack Developer - Henry
												Bootcamp
											</h4>
											<div className="text-lg ml-4">
												<ul className="list-disc">
													<li>
														Desarrollo backend
														(Node.js, Prisma,
														PostgreSQL) en el
														proyecto Chilling Time.
													</li>
													<li>
														Colaboración en el
														diseño del frontend y la
														producción de contenido
														para la página del
														proyecto.
													</li>
												</ul>
											</div>
										</li>
										<li className="flex items-start mt-4">
											<h4 className="text-xl font-medium">
												Evaluador de Código -
												RemoteTasks
											</h4>
											<div className="text-lg ml-4">
												<ul className="list-disc">
													<li>
														Evaluación de código
														generado por IA y
														respuestas relacionadas
														con desarrollo web.
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</section>

								<section className="mt-6">
									<h3 className="text-xl font-medium">
										Tecnologías
									</h3>

									<ul className="flex flex-wrap mt-4 text-lg">
										<li className="mr-4 mb-2">
											Frontend: React, HTML, CSS,
											JavaScript
										</li>
										<li className="mr-4 mb-2">
											Backend: Node.js, Express.js,
											Prisma, PostgreSQL
										</li>
										<li className="mr-4 mb-2">
											Bases de datos: PostgreSQL
										</li>
										<li className="mr-4 mb-2">
											Control de versiones: GIT/Github
										</li>
										<li className="mr-4 mb-2">
											Herramientas: Unity, Blender
										</li>
									</ul>
								</section>

								<section className="mt-6">
									<h3 className="text-xl font-medium">
										¡Quiero aportar valor a tu equipo!
									</h3>

									<p className="text-lg">
										Contáctame para conversar sobre cómo mis
										habilidades y experiencia pueden
										contribuir a tus proyectos.
									</p>
								</section>
							</div>
						</div>
					</div>
				</div>
				{/*
				<div className="relative w-full my-10">
					<div className="absolute -inset-1 bg-gradient-to-b from-cGreen to-cTeal blur-2xl opacity-75"></div>
					<div id="epi" className="relative pb-2 my-10">
						<div className="w-fit flex items-center">
							<h2 className="text-4xl text-center mb-4 align-text-bottom font-bold lg:text-6xl">
								Epígrafe
							</h2>
						</div>
						<p className=" m-1">
							Aca va por escrito lo que digo en el video!
						</p>
						<p className=" m-1">
							Aca cuento sobre mi y me mando el verso de
							bienvenida, Aca cuento sobre mi y me mando el verso
							de bienvenida,Aca cuento sobre mi y me mando el
							verso de bienvenida,Aca cuento sobre mi y me mando
							el verso de bienvenida,Aca cuento sobre mi y me
							mando el verso de bienvenida,Aca cuento sobre mi y
							me mando el verso de bienvenida
						</p>
						
					</div>
				</div>
*/}
				<div className="relative w-full my-10">
					<div className="absolute -inset-1 bg-gradient-to-b from-cGreen to-cTeal blur-2xl opacity-75"></div>
					<div id="pro" className="relative pb-2 my-10">
						<div className="">
							<h2 className="text-4xl text-center mb-4 align-text-bottom font-bold lg:text-6xl">
								Proyectos
							</h2>
						</div>
						<p>
							<Proyects />
						</p>
					</div>
				</div>

				<div className="relative w-full my-10">
					<div className="absolute -inset-1 bg-gradient-to-b from-cGreen to-cTeal blur-2xl opacity-75"></div>
					<div id="cap" className="relative pb-2 my-10">
						<div className="">
							<h2 className="text-4xl text-center mb-4 align-text-bottom font-bold lg:text-6xl">
								Mis Capacidades
							</h2>
						</div>
						<Skills />
					</div>
				</div>

				<div className="relative w-full my-10 ">
					<div className="absolute -inset-1 bg-gradient-to-b from-cGreen to-cTeal blur-2xl opacity-75"></div>
					<div id="cv" className="relative pb-2 my-10">
						<h2 className="text-4xl text-center mb-4 align-text-bottom font-bold lg:text-6xl">
							Currículum
						</h2>
						<div>
							<Pdf />
						</div>
					</div>
				</div>

				<div id="con" className="relative w-full my-10 ">
					<Contact />
				</div>
			</div>
		</div>
	);
}

export default App;
