import React from "react";
import {
	ArrowRightIcon,
	FileArrowDownIcon,
	GithubLogoIcon,
	LinkedinLogoIcon,
	EnvelopeSimpleIcon,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import CurriculoPDF from "../assets/pdfs/AnaLeticia_CV.pdf";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center text-center px-6 py-12 relative overflow-hidden min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
			<h1 className="text-4xl sm:text-5xl font-bold mb-2">
				Olá, eu sou{" "}
				<span className="text-pink-500">Ana Letícia Alves Claudiano</span>
			</h1>
			<p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8">
				Desenvolvedora Full Stack | Desenvolvedora Multimídia
			</p>

			<div className="flex gap-4 mb-8 flex-wrap justify-center">
				<Link
					to="/projetos"
					className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow hover:bg-pink-600 transition-transform duration-300 hover:scale-105 flex items-center gap-2">
					Veja meus projetos <ArrowRightIcon size={20} />
				</Link>

				<a
					href={CurriculoPDF}
					download="AnaLeticia_CV.pdf"
					className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition-transform duration-300 hover:scale-105 flex items-center gap-2">
					Baixar Currículo <FileArrowDownIcon size={20} />
				</a>
			</div>

			<div className="flex gap-6 text-gray-600 dark:text-gray-300">
				<a
					href="https://github.com/Aanastc"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-pink-500 transition-colors"
					aria-label="GitHub">
					<GithubLogoIcon size={28} />
				</a>

				<a
					href="https://www.linkedin.com/in/analetíciaac"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-pink-500 transition-colors"
					aria-label="LinkedIn">
					<LinkedinLogoIcon size={28} />
				</a>

				<a
					href="mailto:analeticia_ac@outlook.com"
					className="hover:text-pink-500 transition-colors"
					aria-label="Email">
					<EnvelopeSimpleIcon size={28} />
				</a>
			</div>
		</section>
	);
}
