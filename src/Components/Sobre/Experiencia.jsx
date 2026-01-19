import { useTranslation } from "react-i18next";

export default function Experiencia() {
	const { t } = useTranslation();

	const current = t("experience.current", { returnObjects: true });
	const previous = t("experience.previous", { returnObjects: true });
	const research = t("experience.research", { returnObjects: true });

	const renderExperience = (exp, title = null) => (
		<div className="space-y-4">
			{title && (
				<h2 className="text-2xl font-semibold text-pink-500">{title}</h2>
			)}
			<div>
				<h3 className="font-semibold">{exp.role || exp.title}</h3>
				<p className="text-sm text-gray-600 dark:text-gray-400">
					{exp.company && `${exp.company} • `}
					{exp.period} • {exp.mode || ""}
				</p>
			</div>

			<ul className="list-disc pl-5 space-y-1">
				{exp.activities.map((act, index) => (
					<li key={index}>{act}</li>
				))}
			</ul>

			<div className="flex flex-wrap gap-2">
				{exp.stacks.map((stack, index) => (
					<span
						key={index}
						className="px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-600 dark:bg-pink-500/20">
						{stack}
					</span>
				))}
			</div>
		</div>
	);

	return (
		<div className="space-y-10">
			<h2 className="text-2xl font-semibold text-pink-500">
				{t("experience.title")}
			</h2>

			{renderExperience(current)}
			{renderExperience(previous)}
			{renderExperience(research)}
		</div>
	);
}
