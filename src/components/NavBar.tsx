import { useState } from "react";
import { House } from "../assets/icons";
//import uk from "../assets/uk.png";
//import spn from "../assets/spn.png";

export const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const handleNavigation = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		targetId: string
	) => {
		e.preventDefault();
		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			const rect = targetElement.getBoundingClientRect();
			window.scrollTo({
				top: window.scrollY + rect.top - 150,
				behavior: "smooth",
			});
		}
	};

	return (
		<div>
			{/* Barra de navegación */}
			<div className="bg-cTeal lg:h-[8%] h-[40px] w-screen px-4 flex fixed items-center justify-left top-0 z-10">
				{/* Icono de casa para desplegar el menú */}
				<div className="w-12 h-12 flex items-center justify-center relative">
					<button className="text-cPlatinum" onClick={toggleMenu}>
						{}
						<House />
					</button>
					{/* Menú de navegación desplegable */}
					{menuOpen && (
						<div className="absolute top-full left-0 p-2 bg-cTeal border border-cPlatinum shadow-lg py-2 rounded">
							{/*<div className="text-cPlatinum text-sm my-2 flex justify-between	 gap-2">
								<div className="hover:bg-cGreen hover:text-cBlack border-cPlatinum border-2 rounded ring ring-cPlatinum ring-opacity-30 px-2">
									<img
										src={spn}
										alt="Español"
										className="w-8"
									/>
								</div>
								<div className="hover:bg-cGreen hover:text-cBlack border-cPlatinum border-2 rounded ring ring-cPlatinum ring-opacity-30 px-2">
									<img
										src={uk}
										alt="English"
										className="w-8"
									/>
								</div>
							</div>*/}

							<ul className="text-cPlatinum text-sm text-center grid grid-rows-subgrid gap-y-2">
								<li className="hover:bg-cGreen hover:text-cBlack border-cPlatinum border-2 rounded ring ring-cPlatinum ring-opacity-30 w-[120px]">
									<a
										href="#vid"
										onClick={(e) =>
											handleNavigation(e, "vid")
										}
									>
										¡Hola Mundo!
									</a>
								</li>
								{/*<li className="hover:bg-cGreen hover:text-cBlack border-cPlatinum border-2 rounded ring ring-cPlatinum ring-opacity-30 w-[120px]">
									<a
										href="#epi"
										onClick={(e) =>
											handleNavigation(e, "epi")
										}
									>
										Epígrafe
									</a>
								</li>*/}
								<li className="hover:bg-cGreen hover:text-cBlack border-cPlatinum border-2 rounded ring ring-cPlatinum ring-opacity-30 w-[120px]">
									<a
										href="#pro"
										onClick={(e) =>
											handleNavigation(e, "pro")
										}
									>
										Proyectos
									</a>
								</li>
								<li className="hover:bg-cGreen hover:text-cBlack border-cPlatinum border-2 rounded ring ring-cPlatinum ring-opacity-30 w-[120px]">
									<a
										href="#cap"
										onClick={(e) =>
											handleNavigation(e, "cap")
										}
									>
										Mis Capacidades
									</a>
								</li>
								<li className="hover:bg-cGreen hover:text-cBlack border-cPlatinum border-2 rounded ring ring-cPlatinum ring-opacity-30 w-[120px]">
									<a
										href="#cv"
										onClick={(e) =>
											handleNavigation(e, "cv")
										}
									>
										Currículum
									</a>
								</li>
								<li className="hover:bg-cGreen hover:text-cBlack border-cPlatinum border-2 rounded ring ring-cPlatinum ring-opacity-30 w-[120px]">
									<a
										href="#con"
										onClick={(e) =>
											handleNavigation(e, "con")
										}
									>
										Contáctame
									</a>
								</li>
							</ul>
						</div>
					)}
				</div>
				<div className="text-cPlatinum w-full text-center text-xl lg:text-5xl">
					<h1>Sergio Ferrari Bryce</h1>
				</div>
			</div>
		</div>
	);
};
