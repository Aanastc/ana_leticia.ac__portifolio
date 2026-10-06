import { useTranslation } from "react-i18next";

export default function Experiencia() {
	const { t } = useTranslation();

	const items = t("experience.items", { returnObjects: true }) || [];

	return (
		<div className="space-y-8">
			<h2 className="text-2xl font-semibold text-pink-500">
				{t("experience.title")}
			</h2>

			<div className="space-y-8 relative before:absolute before:top-2 before:bottom-2 before:left-2 before:w-0.5 before:bg-pink-200 dark:before:bg-pink-500/20">
				{Array.isArray(items) &&
					items.map((exp, index) => (
						<div
							key={index}
							className="relative pl-8 space-y-3 before:absolute before:left-0.5 before:top-1.5 before:w-3.5 before:h-3.5 before:rounded-full before:bg-pink-500 before:border-2 before:border-white dark:before:border-gray-900 before:shadow">
							<div>
								<h3 className="text-lg font-bold text-gray-900 dark:text-white">
									{exp.role || exp.title}
								</h3>
								<p className="text-sm font-medium text-pink-600 dark:text-pink-400">
									{exp.company && <span className="font-semibold text-gray-800 dark:text-gray-200">{exp.company} • </span>}
									{exp.period} {exp.mode ? `• ${exp.mode}` : ""}
								</p>
							</div>

							<ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
								{exp.activities?.map((act, actIdx) => (
									<li key={actIdx} className="leading-relaxed">
										{act}
									</li>
								))}
							</ul>

							<div className="flex flex-wrap gap-2 pt-1">
								{exp.stacks?.map((stack, stackIdx) => (
									<span
										key={stackIdx}
										className="px-2.5 py-1 text-xs rounded-full bg-pink-100 text-pink-700 dark:bg-pink-500/15 dark:text-pink-300 font-medium">
										{stack}
									</span>
								))}
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
