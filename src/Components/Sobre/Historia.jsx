import { useTranslation } from "react-i18next";

export default function Historia() {
	const { t } = useTranslation();

	const stats = t("history.stats", { returnObjects: true });
	const paragraphs = t("history.paragraphs", { returnObjects: true });

	return (
		<div className="space-y-8">
			<div>
				<h2 className="text-2xl font-semibold text-pink-500 mb-4">
					{t("history.title")}
				</h2>

				<div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
					{paragraphs.map((text, index) => (
						<p key={index} dangerouslySetInnerHTML={{ __html: text }} />
					))}
				</div>
			</div>

			<div className="grid sm:grid-cols-2 gap-4 text-sm pt-2">
				{stats.map((stat, index) => (
					<div
						key={index}
						className={`p-4 rounded-xl bg-${stat.bg}-100 dark:bg-${stat.bg}-500/10 text-${stat.bg}-700 dark:text-${stat.bg}-300`}>
						<span className="font-bold text-lg">{stat.value}</span>
						<p>{stat.label}</p>
					</div>
				))}
			</div>
		</div>
	);
}
