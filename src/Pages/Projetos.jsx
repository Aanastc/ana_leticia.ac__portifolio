import {
	ArrowSquareOutIcon,
	GithubLogoIcon,
	TagChevronIcon,
	MonitorPlay,
	FolderOpen,
	GraduationCap,
	CheckCircle,
	MagnifyingGlass,
	X,
	Funnel,
} from "@phosphor-icons/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SocialButtons from "../Components/SocialButtons";
import Folders_ead from "../assets/imgs/folders_ead.png";
import Connect_care from "../assets/imgs/connect_care.png";

export default function Projetos() {
	const { t } = useTranslation();
	const [filtro, setFiltro] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");
	const [activeProgramIndex, setActiveProgramIndex] = useState(0);

	const imagens = {
		"Folders_ead.png": Folders_ead,
		"Connect_care.png": Connect_care,
	};

	const rawProjetos = t("projects.projectsList", { returnObjects: true });
	const projetos = Array.isArray(rawProjetos) ? rawProjetos : [];

	// Obter categorias únicas disponíveis nos projetos
	const distinctCategories = Array.from(
		new Set(projetos.map((p) => p.category).filter(Boolean))
	);

	const categorias = ["all", ...distinctCategories];

	// Filtragem combinada por categoria e por busca (título, descrição, tecnologias)
	const projetosFiltrados = projetos.filter((p) => {
		const matchCategory = filtro === "all" || p.category === filtro;
		if (!matchCategory) return false;

		if (!searchQuery.trim()) return true;

		const q = searchQuery.toLowerCase().trim();
		const matchTitle = p.title?.toLowerCase().includes(q);
		const matchDesc = p.description?.toLowerCase().includes(q);
		const matchTech = p.technologies?.some((tech) =>
			tech.toLowerCase().includes(q)
		);
		const matchCat = p.category?.toLowerCase().includes(q);

		return matchTitle || matchDesc || matchTech || matchCat;
	});

	return (
		<section className="px-6 py-12 max-w-6xl mx-auto text-gray-800 dark:text-gray-200">
			<h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-pink-500">
				{t("projects.title")}
			</h2>

			{/* Controles de Busca e Filtro */}
			<div className="flex flex-col items-center gap-4 mb-12 max-w-3xl mx-auto">
				{/* Barra de Pesquisa */}
				<div className="relative w-full max-w-md">
					<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
						<MagnifyingGlass size={18} weight="bold" />
					</div>
					<input
						type="text"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						placeholder={t("projects.searchPlaceholder")}
						className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all shadow-sm"
					/>
					{searchQuery && (
						<button
							onClick={() => setSearchQuery("")}
							className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-pink-500 transition-colors"
							title={t("projects.clearFilters")}>
							<X size={16} weight="bold" />
						</button>
					)}
				</div>

				{/* Pílulas de Categoria com Contadores */}
				<div className="flex justify-center gap-2 flex-wrap bg-white/70 dark:bg-gray-800/70 p-1.5 rounded-2xl backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 shadow-sm">
					{categorias.map((cat) => {
						const count =
							cat === "all"
								? projetos.length
								: projetos.filter((p) => p.category === cat).length;
						const label = cat === "all" ? t("projects.filterAll") : cat;
						const isSelected = filtro === cat;

						return (
							<button
								key={cat}
								onClick={() => setFiltro(cat)}
								className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
									isSelected
										? "bg-pink-500 text-white shadow-md shadow-pink-500/30 scale-105"
										: "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/60 hover:text-pink-500"
								}`}>
								<span>{label}</span>
								<span
									className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full transition-colors ${
										isSelected
											? "bg-white/20 text-white"
											: "bg-gray-200/70 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
									}`}>
									{count}
								</span>
							</button>
						);
					})}
				</div>
			</div>

			{/* Mensagem se nenhum projeto for encontrado */}
			{projetosFiltrados.length === 0 ? (
				<div className="text-center py-16 px-4 bg-white/40 dark:bg-gray-800/40 rounded-3xl border border-dashed border-gray-200 dark:border-gray-700 max-w-lg mx-auto">
					<Funnel size={40} className="mx-auto text-gray-400 mb-3 opacity-60" />
					<p className="text-gray-600 dark:text-gray-400 font-medium text-sm mb-4">
						{t("projects.noProjectsFound")}
					</p>
					<button
						onClick={() => {
							setFiltro("all");
							setSearchQuery("");
						}}
						className="px-4 py-2 rounded-xl text-xs font-bold bg-pink-500 hover:bg-pink-600 text-white shadow-md transition-all active:scale-95">
						{t("projects.clearFilters")}
					</button>
				</div>
			) : (
				/* Grid de Projetos */
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{projetosFiltrados.map((projeto) => (
					<div
						key={projeto.id}
						className="group relative bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 overflow-hidden flex flex-col">
						
						{/* Imagem */}
						<div className="relative h-48 bg-gray-100 dark:bg-gray-900 overflow-hidden">
							{projeto.image ? (
								<img
									src={imagens[projeto.image]}
									alt={`Preview do projeto ${projeto.title}`}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
								/>
							) : (
								<div className="w-full h-full flex flex-col items-center justify-center space-y-2 text-gray-400">
									<TagChevronIcon size={32} weight="light" />
									<span className="text-xs uppercase tracking-widest font-bold">
										{t("projects.previewUnavailable")}
									</span>
								</div>
							)}
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
								<span className="text-white text-xs font-bold uppercase tracking-wider bg-pink-500 px-2 py-1 rounded">
									{projeto.category}
								</span>
							</div>
						</div>

						{/* Conteúdo */}
						<div className="p-6 flex flex-col flex-grow space-y-4">
							<div className="space-y-1">
								<div className="flex justify-between items-start">
									<h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-pink-500 transition-colors">
										{projeto.title}
									</h3>
									<span className="text-[10px] bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">
										{projeto.production}
									</span>
								</div>
							</div>

							<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
								{projeto.description}
							</p>

							{/* Tecnologias */}
							<div className="flex flex-wrap gap-1.5 mt-auto">
								{projeto.technologies.map((tech) => (
									<span
										key={tech}
										className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wide
                      bg-gray-100 text-gray-600
                      dark:bg-gray-700/50 dark:text-gray-400
                      group-hover:bg-pink-50 group-hover:text-pink-600 dark:group-hover:bg-pink-500/10 dark:group-hover:text-pink-400
                      transition-colors duration-300">
										{tech}
									</span>
								))}
							</div>

							{/* Links */}
							<div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700/50 mt-4">
								<a
									href={projeto.github}
									target="_blank"
									rel="noopener noreferrer"
									className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold
                    bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all active:scale-95">
									<GithubLogoIcon size={20} />
									{t("projects.links.code")}
								</a>

								<a
									href={projeto.demo}
									target="_blank"
									rel="noopener noreferrer"
									className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold
                    bg-pink-500 text-white shadow-lg shadow-pink-500/20 hover:bg-pink-600 hover:shadow-pink-500/40 transition-all active:scale-95">
									<ArrowSquareOutIcon size={20} />
									{t("projects.links.demo")}
								</a>
							</div>
						</div>
					</div>
				))}
				</div>
			)}

			{/* Sessão de Pós-Graduação */}
			{(() => {
				const postGradData = t("projects.postGrad", { returnObjects: true });
				if (!postGradData) return null;
				const postGradPrograms =
					postGradData.programs ||
					(postGradData.phases ? [postGradData] : []);
				const activeProgram =
					postGradPrograms[activeProgramIndex] || postGradPrograms[0];
				const currentPhases =
					activeProgram?.phases || postGradData.phases || [];

				return (
					<div className="mt-24 pt-12 border-t border-gray-100 dark:border-gray-800">
						<div className="text-center max-w-3xl mx-auto mb-10">
							<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 text-xs font-bold tracking-wide uppercase mb-3">
								<GraduationCap size={18} weight="bold" />
								<span>{postGradData.badge || "Formação Continuada"}</span>
							</div>
							<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
								{postGradData.title}
							</h2>
							<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
								{postGradData.description}
							</p>
						</div>

						{/* Seletor de Programas (Escalabilidade para múltiplas pós-graduações) */}
						{postGradPrograms.length > 1 && (
							<div className="flex justify-center gap-3 mb-10 flex-wrap">
								{postGradPrograms.map((prog, index) => (
									<button
										key={prog.id || index}
										onClick={() => setActiveProgramIndex(index)}
										className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
											activeProgramIndex === index
												? "bg-pink-500 text-white shadow-lg shadow-pink-500/30 scale-105"
												: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
										}`}>
										{prog.institution
											? `${prog.institution} • ${prog.course || prog.title}`
											: prog.course || prog.title}
									</button>
								))}
							</div>
						)}

						{/* Cabeçalho do Programa Selecionado */}
						{activeProgram?.course && (
							<div className="mb-8 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 flex flex-wrap items-center justify-between gap-4 max-w-7xl mx-auto">
								<div>
									<span className="text-xs font-bold text-pink-500 uppercase tracking-wider block">
										{activeProgram.institution}
									</span>
									<h3 className="text-lg font-bold text-gray-900 dark:text-white">
										{activeProgram.course}
									</h3>
								</div>
								{activeProgram.status && (
									<span className="px-3 py-1 rounded-full text-xs font-bold bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300">
										{activeProgram.status}
									</span>
								)}
							</div>
						)}

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
							{currentPhases.map((phase) => (
								<div
									key={phase.id}
									className="group bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 p-6 flex flex-col justify-between">
									<div className="space-y-4">
										<div className="flex items-start gap-3">
											<div className="p-3 bg-pink-50 dark:bg-pink-500/10 text-pink-500 rounded-2xl shrink-0 mt-0.5">
												<MonitorPlay size={26} weight="duotone" />
											</div>
											<div>
												{phase.project && (
													<span className="text-[11px] font-bold text-pink-500 uppercase tracking-wider block mb-1">
														{phase.project}
													</span>
												)}
												<h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-pink-500 transition-colors leading-snug">
													{phase.title}
												</h3>
											</div>
										</div>

										<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
											{phase.description}
										</p>

										{/* Tecnologias & Stacks */}
										{phase.stacks && (
											<div className="space-y-1.5 pt-2">
												<span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
													Tecnologias:
												</span>
												<div className="flex flex-wrap gap-1.5">
													{phase.stacks.map((stack, idx) => (
														<span
															key={idx}
															className="px-2.5 py-1 text-xs rounded-full bg-pink-50 text-pink-700 dark:bg-pink-500/15 dark:text-pink-300 font-medium">
															{stack}
														</span>
													))}
												</div>
											</div>
										)}

										{/* Habilidades Adquiridas */}
										{phase.skills && (
											<div className="space-y-1.5 pt-3 border-t border-gray-100 dark:border-gray-700/50">
												<span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
													<CheckCircle size={15} weight="bold" />
													{postGradData.skillsLabel || "Habilidades Adquiridas"}:
												</span>
												<div className="flex flex-wrap gap-1.5">
													{phase.skills.map((skill, idx) => (
														<span
															key={idx}
															className="px-2.5 py-1 text-xs rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300 font-medium border border-emerald-200/50 dark:border-emerald-500/20">
															{skill}
														</span>
													))}
												</div>
											</div>
										)}
									</div>

									<div className="flex flex-col sm:flex-row gap-2 pt-6 mt-4 border-t border-gray-100 dark:border-gray-700/50">
										{phase.githubLink && (
											<a
												href={phase.githubLink}
												target="_blank"
												rel="noopener noreferrer"
												className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all active:scale-95 text-center">
												<GithubLogoIcon size={16} />
												{t("projects.links.code") || "Código"}
											</a>
										)}
										{phase.videoLink && (
											<a
												href={phase.videoLink}
												target="_blank"
												rel="noopener noreferrer"
												className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-white bg-pink-500 shadow-md shadow-pink-500/20 hover:bg-pink-600 transition-all active:scale-95 text-center">
												<MonitorPlay size={16} />
												{postGradData.videoButton || "Vídeo"}
											</a>
										)}
										{phase.folderLink && (
											<a
												href={phase.folderLink}
												target="_blank"
												rel="noopener noreferrer"
												className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-pink-600 dark:text-pink-300 bg-pink-50 dark:bg-pink-500/10 hover:bg-pink-100 dark:hover:bg-pink-500/20 transition-all active:scale-95 text-center">
												<FolderOpen size={16} />
												{postGradData.folderButton || "Docs"}
											</a>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				);
			})()}

			<div className="mt-20">
				<SocialButtons />
			</div>

			<p className="text-center mt-10 text-sm text-gray-500 dark:text-gray-400">
				{t("projects.thankYou")}
			</p>
		</section>
	);
}
