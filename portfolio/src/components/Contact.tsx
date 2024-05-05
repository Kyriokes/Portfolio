import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const Contact = () => {
	const [isHovered, setIsHovered] = useState(false);

	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (form.current) {
			emailjs
				.sendForm("service_ybkx9o9", "template_ov8bcak", form.current, {
					publicKey: "HPOdzduDO6Ab5e_Ro",
				})
				.then(
					() => {
						console.log("SUCCESS!");
						if (form.current) {
							form.current.reset();
						}
						Swal.fire({
							title: "Email enviado!",
							text: "pronto estaremos en contacto",
							icon: "success",
							confirmButtonColor: "#1F7A8C",
							color: "#EAE6E5",
							background: "#1C2321",
							iconColor: "#90A955",
						});
					},
					(error) => {
						console.log("FAILED...", error.text);
					}
				);
		} else {
			console.error("Form is not available.");
		}
	};

	return (
		<div>
			<div className="relative w-full my-10 ">
				<div
					className={`absolute -inset-1 bg-gradient-to-b from-cGreen to-cTeal blur-2xl ${
						isHovered ? "opacity-100 transition-200":"opacity-75"
					} `}
				></div>
				<div className="relative group pb-2 my-10">
					<div className="w-fit flex items-center">
						<h1 className="text-xl text-center  align-text-bottom font-bold m-1 lg:text-6xl">
							Contáctame
						</h1>
					</div>
					<div className="m-1">
						<form
							className="w-full max-w-lg"
							ref={form}
							onSubmit={sendEmail}
						>
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full px-3">
									<label
										className="block uppercase tracking-wide text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Nombre y Apellido
									</label>
									<input
										className="text-black appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="nick"
										type="text"
										name="user_name"
									/>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full px-3">
									<label
										className="block uppercase tracking-wide  text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										E-mail
									</label>
									<input
										className="text-black appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="email"
										type="email"
										name="user_email"
									/>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full px-3">
									<label
										className="block uppercase tracking-wide  text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Motivo de contacto
									</label>
									<textarea
										className="text-black no-resize appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
										id="message"
										name="message"
									></textarea>
								</div>
							</div>
							<div className="md:flex md:items-center">
								<div className="md:w-1/3">
									<button
										className="w-32 shadow bg-cTeal hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
										type="submit"
										value="Send"
										onMouseOver={() => setIsHovered(true)}
										onMouseLeave={() => setIsHovered(false)}
									>
										Send
									</button>
								</div>
								<div className="md:w-2/3"></div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
