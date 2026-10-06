import React from "react";
import {
	ArrowRightIcon,
	FileArrowDownIcon,
	GithubLogoIcon,
	LinkedinLogoIcon,
	EnvelopeSimpleIcon,
	MapPinIcon,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";

import CurriculoPT from "../assets/pdfs/Curriculo_AnaLeticia_PT.pdf";
import CurriculoEN from "../assets/pdfs/Curriculo_AnaLeticia_EN.pdf";
import StackCarousel from "../Components/StackCarousel";
import Foto from "../assets/imgs/foto.png";
import SocialButtons from "../Components/SocialButtons";

export default function Home() {
	const { t, i18n } = useTranslation();
	const currentCV = i18n.language === "en" ? CurriculoEN : CurriculoPT;
	const cvDownloadName =
		i18n.language === "en" ? "AnaLeticia_Resume_EN.pdf" : "Curriculo_AnaLeticia_PT.pdf";

	return (
		<section className="min-h-[calc(100vh-64px)] flex flex-col justify-center text-gray-900 dark:text-gray-100">
			<div className="max-w-5xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row gap-12 items-center">
				<div className="w-full md:w-3/5 text-center md:text-left space-y-6">
					<div className="inline-block px-4 py-1.5 rounded-full bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 text-sm font-bold tracking-wide uppercase mb-2">
						<Typewriter
							words={
								i18n.language === "pt"
									? [
											"Analista de Sistemas",
											"Desenvolvedora Full Stack",
											"IA & Engenharia de Prompts (LLMs)",
											"DevOps & Cloud",
											"Especialista Moodle",
									  ]
									: [
											"Systems Analyst",
											"Full Stack Developer",
											"AI & Prompt Engineering (LLMs)",
											"DevOps & Cloud",
											"Moodle Specialist",
									  ]
							}
							loop={0}
							cursor
							cursorStyle='_'
							typeSpeed={70}
							deleteSpeed={50}
							delaySpeed={1500}
						/>
					</div>

					<h1 className="text-5xl sm:text-6xl font-black tracking-tighter leading-tight text-gray-900 dark:text-white">
						{t("home.greeting")}{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600 dark:from-pink-400 dark:to-rose-500">
							Ana Letícia
						</span>
					</h1>

					<h2 className="text-xl text-gray-600 dark:text-gray-400 font-medium max-w-lg mx-auto md:mx-0">
						<span className="text-pink-500 font-bold opacity-50 mr-2">//</span>
						{t("home.subtitle")}
					</h2>

					<div className="flex items-center justify-center md:justify-start gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400">
						<MapPinIcon size={18} className="text-pink-500 shrink-0" weight="fill" />
						<span>{t("home.location")}</span>
					</div>

					<div className="flex gap-4 flex-wrap justify-center md:justify-start pt-6">
						<Link
							to="/projetos"
							className="px-8 py-4 bg-pink-500 text-white font-bold rounded-2xl shadow-lg shadow-pink-500/30 hover:bg-pink-600 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 group">
							{t("home.projectsButton")}
							<ArrowRightIcon size={20} className="group-hover:translate-x-1 transition-transform" />
						</Link>

						<a
							href={currentCV}
							download={cvDownloadName}
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold rounded-2xl shadow-xl hover:shadow-gray-200 dark:hover:shadow-black/40 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 border border-gray-100 dark:border-gray-700">
							{t("home.downloadCV")}
							<FileArrowDownIcon size={20} />
						</a>
					</div>

					<div className="pt-8">
						<SocialButtons />
					</div>
				</div>

				<div className="w-full md:w-2/5 flex justify-center md:justify-end relative group">
					{/* Glow que fica transparente em repouso e ganha cor vibrante no hover */}
					<div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-pink-500 to-emerald-500 rounded-full blur-3xl opacity-10 group-hover:opacity-50 transition-all duration-700 ease-out pointer-events-none"></div>

					{/* Foto sempre colorida, transparente, sem nenhum quadrado atrás */}
					<img
						src={Foto}
						alt="Foto de Ana Letícia"
						className="relative z-10 w-64 sm:w-72 md:w-full max-w-sm object-cover aspect-square transition-transform duration-500 ease-out group-hover:scale-[1.03]"
					/>
				</div>
			</div>

			<div className="mt-auto">
				<StackCarousel />
			</div>
		</section>
	);
}
