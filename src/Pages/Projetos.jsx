import {
	ArrowSquareOutIcon,
	GithubLogoIcon,
	TagChevronIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SocialButtons from "../Components/SocialButtons";
import Folders_ead from "../assets/imgs/folders_ead.png";
import Connect_care from "../assets/imgs/connect_care.png";

export default function Projetos() {
	const { t } = useTranslation();
	const [filtro, setFiltro] = useState(t("projects.filterAll"));

	const imagens = {
		"Folders_ead.png": Folders_ead,
		"Connect_care.png": Connect_care,
	};

	const projetos = t("projects.projectsList", { returnObjects: true });
	const categorias = [
		t("projects.filterAll"),
		...new Set(projetos.map((p) => p.category)),
	];

	const projetosFiltrados =
		filtro === t("projects.filterAll")
			? projetos
			: projetos.filter((p) => p.category === filtro);

	return (
		<section className="px-6 py-12 max-w-6xl mx-auto text-gray-800 dark:text-gray-200">
			<h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-pink-500">
				{t("projects.title")}
			</h2>

			{/* Filtro */}
			{/* <div className="flex justify-center gap-3 mb-10 flex-wrap">
				{categorias.map((cat) => (
					<button
						key={cat}
						onClick={() => setFiltro(cat)}
						className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
								filtro === cat
									? "bg-emerald-500 text-white shadow"
									: "bg-gray-200 dark:bg-gray-700 hover:bg-emerald-500 hover:text-white"
							}`}>
						{cat}
					</button>
				))}
			</div> */}

			{/* Grid de Projetos */}
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{projetosFiltrados.map((projeto) => (
					<div
						key={projeto.id}
						className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700
            hover:shadow-xl transition-all duration-300 overflow-hidden group">
						{/* Imagem */}
						<div className="h-40 bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
							{projeto.image ? (
								<img
									src={imagens[projeto.image]}
									alt={`Preview do projeto ${projeto.title}`}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
								/>
							) : (
								<span className="text-sm text-gray-500">
									{t("projects.previewUnavailable")}
								</span>
							)}
						</div>

						{/* Conteúdo */}
						<div className="p-5 space-y-3">
							<div>
								<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
									{projeto.title}
								</h3>
								<span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
									{projeto.production}
								</span>
							</div>

							<p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
								{projeto.description}
							</p>

							{/* Tecnologias */}
							<div className="flex flex-wrap gap-2">
								{projeto.technologies.map((tech) => (
									<span
										key={tech}
										className="px-3 py-1 rounded-full text-xs font-medium
                      bg-emerald-100 text-emerald-700
                      dark:bg-emerald-500/10 dark:text-emerald-300
                      hover:bg-emerald-200 dark:hover:bg-emerald-500/20
                      transition flex items-center gap-1">
										<TagChevronIcon size={12} />
										{tech}
									</span>
								))}
							</div>

							{/* Links */}
							<div className="flex gap-3 pt-2">
								<a
									href={projeto.github}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm
                    bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition">
									<GithubLogoIcon size={18} />
									{t("projects.links.code")}
								</a>

								<a
									href={projeto.demo}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium
                    bg-pink-500 text-white hover:bg-pink-600 transition">
									<ArrowSquareOutIcon size={18} />
									{t("projects.links.demo")}
								</a>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="mt-14">
				<SocialButtons />
			</div>

			<p className="text-center mt-10 text-sm text-gray-500 dark:text-gray-400">
				{t("projects.thankYou")}
			</p>
		</section>
	);
}
