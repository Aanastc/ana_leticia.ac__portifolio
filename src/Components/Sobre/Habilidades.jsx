import { useTranslation } from "react-i18next";

const colorMap = {
	pink: "bg-pink-100 text-pink-700 dark:bg-pink-500/10 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-500/20",
	emerald:
		"bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-500/20",
	sky: "bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300 hover:bg-sky-200 dark:hover:bg-sky-500/20",
	violet:
		"bg-violet-100 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300 hover:bg-violet-200 dark:hover:bg-violet-500/20",
	amber:
		"bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-500/20",
	gray: "bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500/20",
};

export default function Habilidades() {
	const { t } = useTranslation();
	const skills = t("skills", { returnObjects: true });

	const renderSkillGroup = (title, group, color) => (
		<div className="space-y-3">
			<h3 className="font-semibold text-lg">{title}</h3>
			<div className="flex flex-wrap gap-3">
				{group.map((skill) => (
					<span
						key={skill}
						className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${colorMap[color]}`}>
						{skill}
					</span>
				))}
			</div>
		</div>
	);

	return (
		<div className="space-y-10">
			<h2 className="text-2xl font-semibold text-pink-500">
				{t("skills.title")}
			</h2>

			{renderSkillGroup(t("skills.frontendTitle"), skills.frontend, "pink")}
			{renderSkillGroup(t("skills.backendTitle"), skills.backend, "emerald")}
			{renderSkillGroup(t("skills.devopsTitle"), skills.devops, "sky")}
			{renderSkillGroup(t("skills.dadosTitle"), skills.dados, "violet")}
			{renderSkillGroup(
				t("skills.ferramentasTitle"),
				skills.ferramentas,
				"amber",
			)}
			{renderSkillGroup(t("skills.softTitle"), skills.soft, "gray")}
		</div>
	);
}
