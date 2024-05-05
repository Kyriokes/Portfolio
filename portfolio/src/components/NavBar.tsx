import { useState } from "react";
import { House } from "../assets/icons"


export const NavBar=()=>{

	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      
			const rect = targetElement.getBoundingClientRect();
      window.scrollTo({ top: window.scrollY + rect.top - 150, behavior: "smooth" });
    }
  };

return(
	
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
						<div className="dropdown-menu absolute top-full left-0 z-50 bg-cTeal border border-cPlatinum shadow-lg py-2 rounded">
							<ul className="text-cPlatinum text-sm">
								<li>español</li>
								<li>ingles</li>
							</ul>

							<ul className="text-cPlatinum text-sm">
								<li className="hover:bg-cGreen hover:text-cBlack">
									<a href="#vid" onClick={(e) => handleNavigation(e, "vid")}>¡Hola Mundo!</a>
								</li>
								<li className="hover:bg-cGreen hover:text-cBlack">
									<a href="#epi" onClick={(e) => handleNavigation(e, "epi")}>Epígrafe</a>
								</li>
								<li className="hover:bg-cGreen hover:text-cBlack">
									<a href="#pro" onClick={(e) => handleNavigation(e, "pro")}>Proyectos</a>
								</li>
								<li className="hover:bg-cGreen hover:text-cBlack">
									<a href="#cap" onClick={(e) => handleNavigation(e, "cap")}>Mis Capacidades</a>
								</li>
								<li className="hover:bg-cGreen hover:text-cBlack">
									<a href="#cv" onClick={(e) => handleNavigation(e, "cv")}>Currículum</a>
								</li>
								<li className="hover:bg-cGreen hover:text-cBlack">
									<a href="#con" onClick={(e) => handleNavigation(e, "con")}>Contáctame</a>
								</li>
							</ul>
						</div>
					)}
				</div>
				<div className="text-cPlatinum w-full text-center lg:text-5xl">
					{/* Título de la página */}
					Sergio Ferrari Bryce
				</div>
			</div>
  </div>
)


}
