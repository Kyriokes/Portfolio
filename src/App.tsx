import "./index.css";
import { Skills } from "./assets/skills";
import { NavBar } from "./components/NavBar";
import { Contact } from "./components/Contact";
import { Pdf } from "./components/Pdf";
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function App() {
	return (
		<div className="bg-cBlack w-screen h-full flex flex-col mt-[40px]">
			<NavBar />
			<div className="flex flex-col items-center justify-center text-cPlatinum flex-grow p-4 max-w-full mx-auto lg:max-w-[30%] lg:gap-20">
				<div className="relative w-full my-10">
					<div className="absolute -inset-1 bg-gradient-to-b from-cGreen to-cTeal blur-2xl opacity-75"></div>
					<div id="vid" className="relative pb-2 my-10">
						<div className="w-full flex items-center">
							<h2 className="text-xl text-center  align-text-bottom font-bold m-1 lg:text-6xl">
								¡Hola Mundo!
							</h2>
						</div>
						<div className=" m-0.5">
							<iframe
								height="100%"
								width="100%"
								src="https://www.youtube.com/embed/9ZQFLB4Hlg0?si=SBXfl0YvrxAiquXs"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</div>

				<div className="relative w-full my-10">
					<div className="absolute -inset-1 bg-gradient-to-b from-cGreen to-cTeal blur-2xl opacity-75"></div>
					<div id="epi" className="relative pb-2 my-10">
						<div className="w-fit flex items-center">
							<h2 className="text-xl text-center  align-text-bottom font-bold m-1 lg:text-6xl">
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

				<div className="relative w-full my-10">
					<div className="absolute -inset-1 bg-gradient-to-b from-cGreen to-cTeal blur-2xl opacity-75"></div>
					<div id="pro" className="relative pb-2 my-10">
						<div className="w-fit flex items-center">
							<h2 className="text-xl text-center  align-text-bottom font-bold m-1 lg:text-6xl">
								Proyectos
							</h2>
						</div>
						<p>_</p>
					</div>
				</div>

				<div className="relative w-full my-10">
					<div className="absolute -inset-1 bg-gradient-to-b from-cGreen to-cTeal blur-2xl opacity-75"></div>
					<div id="cap" className="relative pb-2 my-10">
						<div className="w-fit flex items-center">
							<h2 className="text-xl text-center  align-text-bottom font-bold m-1 lg:text-6xl">
								Mis Capacidades
							</h2>
						</div>
						<Skills />
					</div>
				</div>

				<div className="relative w-full my-10 ">
					<div className="absolute -inset-1 bg-gradient-to-b from-cGreen to-cTeal blur-2xl opacity-75"></div>
					<div id="cv" className="relative pb-2 my-10">
						<div className=" selection:items-center">
							<h2 className="text-xl text-center flex flex-wrap align-text-bottom font-bold m-1 lg:text-6xl">
								Currículum
							</h2>
							<div>
								<Pdf></Pdf>
							</div>
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
