import React from "react";
import {
	BriefcaseIcon,
	CodeBlockIcon,
	EnvelopeSimpleIcon,
	GithubLogoIcon,
	GraduationCapIcon,
	LinkedinLogoIcon,
	PhoneCallIcon,
	UserCheckIcon,
	UserCircleCheckIcon,
} from "@phosphor-icons/react";

export default function SobreMim() {
	const skills = [
		"HTML",
		"CSS",
		"JavaScript",
		"Tailwind CSS",
		"React",
		"Node.js",
		"APIs RESTful",
		"PostgreSQL",
		"Git",
		"Figma",
		"Vercel",
		"After Effects",
		"Motion Design",
	];

	const softSkills = [
		"Trabalho em equipe",
		"Comunicação",
		"Organização",
		"Inglês intermediário",
	];

	const SectionTitle = ({ icon: Icon, title }) => (
		<h3 className="flex items-center gap-2 text-xl font-semibold text-pink-500 mb-4 border-b border-pink-300 pb-1">
			<Icon size={24} weight="duotone" />
			{title}
		</h3>
	);

	return (
		<section className="max-w-5xl mx-auto px-6 py-12 text-gray-900 dark:text-gray-100">
			{/* Header */}
			<header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
				<div>
					<h1 className="text-4xl font-bold text-pink-500">
						Ana Letícia Alves Claudiano
					</h1>
					<p className="text-lg text-gray-600 dark:text-gray-300">
						Desenvolvedora Full Stack | Web Designer Multimídia
					</p>
				</div>

				{/* Contatos */}
				<div className="flex flex-col gap-2 text-sm">
					<a
						href="https://wa.me/5531999679109"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 hover:text-pink-500 transition-colors">
						<PhoneCallIcon size={16} /> (31) 9 9967-9109
					</a>
					<a
						href="mailto:analeticia_ac@outlook.com"
						className="flex items-center gap-2 hover:text-pink-500 transition-colors">
						<EnvelopeSimpleIcon size={16} /> analeticia_ac@outlook.com
					</a>
					<a
						href="https://www.linkedin.com/in/analetíciaac"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 hover:text-pink-500 transition-colors">
						<LinkedinLogoIcon size={16} /> linkedin.com/in/analetíciaac
					</a>
					<a
						href="https://github.com/Aanastc"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 hover:text-pink-500 transition-colors">
						<GithubLogoIcon size={16} /> github.com/Aanastc
					</a>
				</div>
			</header>

			{/* Resumo Profissional */}
			<SectionTitle icon={UserCircleCheckIcon} title="Resumo Profissional" />
			<p className="mb-12 leading-relaxed text-gray-700 dark:text-gray-300">
				Graduada em Análise e Desenvolvimento de Sistemas pela Universidade de
				Fortaleza (Unifor), com dois anos de experiência como Web Designer e
				programadora multimídia. Desenvolvi interfaces web responsivas, otimizei
				e automatizei processos com <strong>Node.js</strong> e contribui para a
				evolução de design systems institucionais. Também atuei em projetos
				paralelos usando <strong>React</strong>.
			</p>

			{/* Duas colunas após o resumo */}
			<div className="grid sm:grid-cols-[1fr_2fr] gap-10 sm:gap-16 pt-10">
				{/* Coluna Esquerda - Skills */}
				<div className="space-y-10 bg-gray-800 dark:bg-gray-900 p-6 rounded-lg text-gray-100">
					<div>
						<SectionTitle
							icon={CodeBlockIcon}
							title="Habilidades / Ferramentas"
						/>
						<ul className="space-y-1 pl-5 list-disc marker:text-pink-400">
							{skills.map((skill) => (
								<li key={skill}>{skill}</li>
							))}
						</ul>
					</div>
					<div>
						<SectionTitle icon={UserCheckIcon} title="Soft Skills" />
						<ul className="space-y-1 pl-5 list-disc marker:text-pink-400">
							{softSkills.map((skill) => (
								<li key={skill}>{skill}</li>
							))}
						</ul>
					</div>
				</div>

				{/* Coluna Direita - Experiência e Formação */}
				<div className="space-y-10 sm:pl-10">
					<div>
						<SectionTitle
							icon={BriefcaseIcon}
							title="Experiência Profissional"
						/>
						<div className="space-y-6">
							<div>
								<h4 className="font-semibold text-lg">
									Web Designer Multimídia
								</h4>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									Polo EAD da Universidade de Fortaleza · 2022 - 2024
								</p>
								<ul className="mt-2 space-y-1 pl-5 list-disc marker:text-pink-400">
									<li>
										Desenvolvimento e implementação de páginas web com foco em
										Clean Code.
									</li>
									<li>Configuração e integração de códigos no Moodle.</li>
									<li>Automatização de processos com Node.js.</li>
									<li>
										Melhorias de interface no Moodle para maior usabilidade.
									</li>
									<li>Criação de interfaces digitais com ReactJS.</li>
								</ul>
							</div>

							<div>
								<h4 className="font-semibold text-lg">
									Estagiária de Desenvolvimento Web
								</h4>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									Polo EAD da Universidade de Fortaleza · 2021 - 2022
								</p>
								<ul className="mt-2 space-y-1 pl-5 list-disc marker:text-pink-400">
									<li>
										Criação de páginas web utilizando JavaScript, HTML, CSS e
										Bootstrap.
									</li>
									<li> Configuração e integração de códigos no Moodle.</li>
								</ul>
							</div>
						</div>
					</div>

					<div>
						<SectionTitle icon={GraduationCapIcon} title="Formação Acadêmica" />
						<p>
							<strong>Análise e Desenvolvimento de Sistemas</strong>
							<br />
							Universidade de Fortaleza (Unifor) – Conclusão em 2023
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
