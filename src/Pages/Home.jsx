import React from "react";
import {
	ArrowRightIcon,
	FileArrowDownIcon,
	GithubLogoIcon,
	LinkedinLogoIcon,
	EnvelopeSimpleIcon,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import CurriculoPDF from "../assets/pdfs/Curriculo_ana.pdf";
import StackCarousel from "../Components/StackCarousel";
import Foto from "../assets/imgs/foto.png";
import SocialButtons from "../Components/SocialButtons";

export default function Home() {
	const { t } = useTranslation();

	return (
		<section className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
			<div className="max-w-5xl mx-auto px-2 py-12 flex flex-col-reverse md:flex-row gap-8 items-center">
				<div className="w-full md:w-1/2 text-center md:text-left ">
					<p className="text-lg text-gray-600 dark:text-gray-400">
						{t("home.role")}
					</p>

					<h1 className="text-4xl sm:text-5xl font-bold">
						{t("home.greeting")}{" "}
						<span className="text-pink-500">Ana Letícia Alves Claudiano</span>
					</h1>

					<h2 className="text-lg text-gray-600 dark:text-gray-400">
						// {t("home.subtitle")}
					</h2>

					<div className="flex gap-4 flex-wrap justify-center md:justify-start pt-4">
						<Link
							to="/projetos"
							className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-xl shadow hover:bg-pink-600 transition-transform hover:scale-105 flex items-center gap-2">
							{t("home.projectsButton")}
							<ArrowRightIcon size={20} />
						</Link>

						<a
							href={CurriculoPDF}
							download="AnaLeticia_CV.pdf"
							className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold rounded-xl shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition-transform hover:scale-105 flex items-center gap-2">
							{t("home.downloadCV")}
							<FileArrowDownIcon size={20} />
						</a>
					</div>

					<div className="flex gap-6 pt-6 text-gray-600 dark:text-gray-300 justify-center md:justify-start">
						<SocialButtons />
					</div>
				</div>

				<div className="w-full md:w-1/2 flex justify-center md:justify-end">
					<img
						src={Foto}
						alt="Foto de Ana Letícia"
						className="w-56 sm:w-60 md:w-72 max-w-xs rounded-2xl shadow-xl object-cover"
					/>
				</div>
			</div>

			<StackCarousel />
		</section>
	);
}
