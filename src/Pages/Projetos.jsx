import {
	ArrowSquareOutIcon,
	GithubLogoIcon,
	TagChevronIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import SocialButtons from "../Components/SocialButtons";
import Folders_ead from "../assets/imgs/folders_ead.png";
import Connect_care from "../assets/imgs/connect_care.png";

const projetos = [
	{
		id: 2,
		titulo: "Folders dos cursos - EAD UNifor",
		descricao:
			"Projeto de organização de cursos EAD da Unifor com interface interativa.",
		tecnologias: ["React", "CSS", "Vercel"],
		categoria: "React",
		github: "https://github.com/Aanastc/FeiraDasProfi.git",
		demo: "https://feira-das-profi.vercel.app/",
		image: Folders_ead,
		producao: "2025.1",
	},
	{
		id: 1,
		titulo: "Design System - EAD UNifor",
		descricao:
			"Biblioteca de componentes reutilizáveis criada para padronizar interfaces do EAD da Unifor.",
		tecnologias: ["React", "NPM", "Vercel"],
		categoria: "React",
		github: "https://github.com/Aanastc/design_system-project.git",
		demo: "https://design-system-project-git-20242-ana-leticias-projects-198dfb27.vercel.app/",
		// image: DesignSystem_ead,
		producao: "Em andamento",
	},
	{
		id: 3,
		titulo: "Connect-care (TCC)",
		descricao:
			"Projeto de conclusão de curso, que visva conectar pacientes a profissionais de saúde de forma eficiente, para fazer serviços em casa(home care).",
		tecnologias: [
			"React",
			"NPM",
			"Vercel",
			"Supabase",
			"API REST",
			"tailwindcss",
		],
		categoria: "React",
		github: "connect-care",
		demo: "https://connect-care-server.vercel.app/#section-1",
		image: Connect_care,
		producao: "2023",
	},
];

export default function Projetos() {
	const [filtro, setFiltro] = useState("Todos");

	const categorias = ["Todos", ...new Set(projetos.map((p) => p.categoria))];

	const projetosFiltrados =
		filtro === "Todos"
			? projetos
			: projetos.filter((proj) => proj.categoria === filtro);

	return (
		<section className="px-6 py-12 max-w-6xl mx-auto text-gray-800 dark:text-gray-200">
			<h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-pink-500">
				Projetos
			</h2>

			{/* Filtro */}
			<div className="flex justify-center gap-4 mb-8 flex-wrap">
				{categorias.map((cat) => (
					<button
						key={cat}
						className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
							filtro === cat
								? "bg-pink-500 text-white"
								: "bg-gray-200 dark:bg-gray-700 hover:bg-pink-500 hover:text-white"
						}`}
						onClick={() => setFiltro(cat)}>
						{cat}
					</button>
				))}
			</div>

			{/* Grid de Projetos */}
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{projetosFiltrados.map((projeto) => (
					<div
						key={projeto.id}
						className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden">
						<div className="w-full h-40 relative bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
							{projeto.image ? (
								<img
									src={projeto.image}
									alt={`Preview do projeto ${projeto.titulo}`}
									className="w-full h-full object-cover"
								/>
							) : (
								<span className="text-sm text-gray-600 dark:text-gray-300">
									📂 Preview indisponível
								</span>
							)}
						</div>

						<div className="p-4">
							<h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
								{projeto.titulo}
							</h3>

							{/* Tag de Produção */}
							<p className="mt-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
								Produção: {projeto.producao}
							</p>

							<p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
								{projeto.descricao}
							</p>

							{/* Tecnologias */}
							<ul className="mt-2 text-xs text-gray-500 flex flex-wrap gap-2 items-center">
								{projeto.tecnologias.map((tech, index) => (
									<li
										key={index}
										className="px-2 py-0.5 text-xs bg-gray-200 dark:bg-gray-700 rounded flex items-center gap-1">
										<TagChevronIcon size={12} /> {tech}
									</li>
								))}
							</ul>

							{/* Links */}
							<div className="mt-4 flex gap-3 flex-wrap">
								<a
									href={projeto.github}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`Código do projeto ${projeto.titulo}`}
									className="flex items-center gap-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
									<GithubLogoIcon size={18} /> Código
								</a>
								<a
									href={projeto.demo}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`Demo do projeto ${projeto.titulo}`}
									className="flex items-center gap-1 px-3 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors">
									<ArrowSquareOutIcon size={18} /> Demo
								</a>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Redes sociais */}
			<div className="mt-12">
				<SocialButtons />
			</div>

			{/* Agradecimento */}
			<p className="text-center mt-10 text-sm text-gray-500 dark:text-gray-400">
				Obrigada por visitar meu portfólio! 💖
			</p>
		</section>
	);
}
