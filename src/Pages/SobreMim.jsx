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
	const skills = {
		"Front-end": [
			"HTML5",
			"CSS3",
			"JavaScript (ES6+)",
			"React",
			"Tailwind CSS",
			"Design Systems",
			"Acessibilidade Web (WCAG)",
		],
		"Back-end": ["Node.js", "APIs RESTful", "PostgreSQL"],
		"DevOps & Cloud": [
			"Docker",
			"Git & GitHub",
			"Vercel",
			"CI/CD (Integração Contínua)",
			"Arquitetura Cloud (em formação)",
		],
		"Design & UX": ["Figma", "UX/UI Design", "Motion Design", "After Effects"],
	};

	const softSkills = [
		"Trabalho em equipe",
		"Comunicação eficaz",
		"Organização e proatividade",
		"Resolução de problemas",
		"Inglês intermediário",
	];

	const SectionTitle = ({ icon: Icon, title }) => (
		<h3 className="flex items-center gap-2 text-xl font-semibold text-pink-500 mb-4 border-b border-pink-300 pb-1">
			<Icon size={24} weight="duotone" />
			{title}
		</h3>
	);

	return (
		<section className="max-w-6xl mx-auto px-6 py-12 text-gray-900 dark:text-gray-100">
			{/* Header */}
			<header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
				<div>
					<h1 className="text-4xl font-bold text-pink-500">
						Ana Letícia Alves Claudiano
					</h1>
					<p className="text-lg text-gray-600 dark:text-gray-300">
						Desenvolvedora Full Stack | Analista de Sistemas
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
				Desenvolvedora Full Stack e Analista de Sistemas com mais de 5 anos de
				experiência na criação de interfaces digitais responsivas, acessíveis e
				centradas na experiência do usuário. Atuação com JavaScript e Node.js em
				projetos de automação e otimização de sistemas, incluindo melhorias em
				plataformas como o Moodle. Experiência com Design Systems, aplicação de
				boas práticas de código e trabalho colaborativo em equipes
				multidisciplinares.
			</p>

			{/* Layout principal */}
			<div className="grid lg:grid-cols-[1fr_2fr] gap-10 sm:gap-16">
				{/* Coluna Esquerda */}
				<aside className="space-y-10 bg-gray-50 dark:bg-gray-900 pt-0 p-6 rounded-2xl shadow-md">
					<div>
						<SectionTitle
							icon={CodeBlockIcon}
							title="Habilidades / Ferramentas"
						/>
						<div className="space-y-5">
							{Object.entries(skills).map(([categoria, lista]) => (
								<div key={categoria}>
									<h4 className="text-pink-400 font-semibold mb-2">
										{categoria}
									</h4>
									<ul className="space-y-1 pl-5 list-disc marker:text-pink-400 text-gray-800 dark:text-gray-200">
										{lista.map((skill) => (
											<li key={skill}>{skill}</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					<div>
						<SectionTitle icon={UserCheckIcon} title="Soft Skills" />
						<ul className="space-y-1 pl-5 list-disc marker:text-pink-400">
							{softSkills.map((skill) => (
								<li key={skill}>{skill}</li>
							))}
						</ul>
					</div>
				</aside>

				{/* Coluna Direita */}
				<div className="space-y-10 sm:pl-4">
					<div>
						<SectionTitle
							icon={BriefcaseIcon}
							title="Experiência Profissional"
						/>
						<div className="space-y-6">
							<div>
								<h4 className="font-semibold text-lg">
									Analista de Suporte Moodle
								</h4>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									Universidade de Fortaleza · Presencial | Setembro de 2025 -
									Presente
								</p>
								<ul className="mt-2 space-y-1 pl-5 list-disc marker:text-pink-400">
									<li>
										Configuração, manutenção e integração de códigos na
										plataforma Moodle.
									</li>
									<li>
										Automação e otimização de processos internos utilizando
										Node.js.
									</li>
									<li>
										Atendimento a usuários via Service Desk Nível 1 e
										escalonamento de incidentes.
									</li>
									<li>Criação e atualização de documentação técnica.</li>
								</ul>
							</div>

							<div>
								<h4 className="font-semibold text-lg">
									Web Designer Multimídia
								</h4>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									Universidade de Fortaleza · Presencial | Abril de 2023 -
									Setembro de 2025
								</p>
								<ul className="mt-2 space-y-1 pl-5 list-disc marker:text-pink-400">
									<li>
										Desenvolvimento de interfaces web com ReactJS e Tailwind
										CSS.
									</li>
									<li>Melhorias de usabilidade e acessibilidade no Moodle.</li>
									<li>
										Automação de processos com Node.js e boas práticas de Clean
										Code.
									</li>
								</ul>
							</div>

							<div>
								<h4 className="font-semibold text-lg">
									Projeto de Pesquisa (FUNCEME)
								</h4>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									Universidade de Fortaleza · Presencial | Abril de 2022 - Março
									de 2023
								</p>
								<p className="mt-2 text-sm italic text-gray-700 dark:text-gray-300">
									Otimização Geoespacial do Sistema de Abastecimento de Água do
									Ceará.
								</p>
								<ul className="mt-2 space-y-1 pl-5 list-disc marker:text-pink-400">
									<li>
										Criação de scripts em Python para coleta e análise de dados
										(Pandas, Matplotlib).
									</li>
									<li>Tratamento e visualização de dados geoespaciais.</li>
								</ul>
							</div>

							<div>
								<h4 className="font-semibold text-lg">
									Estagiária de Desenvolvimento Web
								</h4>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									Universidade de Fortaleza · Presencial | 2021 - 2022
								</p>
								<ul className="mt-2 space-y-1 pl-5 list-disc marker:text-pink-400">
									<li>
										Criação de páginas web utilizando JavaScript, HTML, CSS e
										Bootstrap.
									</li>
									<li>Configuração e integração de códigos no Moodle.</li>
								</ul>
							</div>
						</div>
					</div>

					<div>
						<SectionTitle icon={GraduationCapIcon} title="Formação Acadêmica" />
						<div className="space-y-4">
							<div>
								<p>
									<strong>Pós Tech: DevOps e Arquitetura Cloud</strong>
									<br />
									FIAP – EAD | Out 2025 – Em andamento
								</p>
							</div>
							<div>
								<p>
									<strong>Análise e Desenvolvimento de Sistemas</strong>
									<br />
									Universidade de Fortaleza (Unifor) – Presencial | Ago 2021 –
									Dez 2023
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
