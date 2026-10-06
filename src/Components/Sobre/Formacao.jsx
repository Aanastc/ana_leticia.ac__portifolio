import { useTranslation } from "react-i18next";

export default function Formacao() {
	const { t } = useTranslation();

	const courses = t("formation.courses", { returnObjects: true });
	const postGrad = t("formation.postGrad", { returnObjects: true });
	const grad = t("formation.grad", { returnObjects: true });

	const listToRender = Array.isArray(courses) && courses.length > 0
		? courses
		: [postGrad, grad].filter(Boolean);

	const renderFormation = (formation, index) => (
		<div
			key={formation.id || index}
			className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 space-y-4 border border-transparent hover:border-pink-500/20 transition-all duration-300">
			<div>
				{formation.type && (
					<span className="text-xs font-bold text-pink-500 uppercase tracking-wider block mb-1">
						{formation.type}
					</span>
				)}
				<h3 className="font-semibold text-lg text-gray-900 dark:text-white">
					{formation.title}
				</h3>
				<p className="text-sm text-gray-600 dark:text-gray-400">
					{formation.institution} • {formation.period}
				</p>
			</div>

			<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
				{formation.description}
			</p>

			{/* Stacks */}
			{formation.stacks && (
				<div className="flex flex-wrap gap-2 pt-1">
					{formation.stacks.map((stack, index) => (
						<span
							key={index}
							className="px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-600 dark:bg-pink-500/20 dark:text-pink-300 font-medium">
							{stack}
						</span>
					))}
				</div>
			)}
		</div>
	);

	return (
		<div className="space-y-8">
			<h2 className="text-2xl font-semibold text-pink-500">
				{t("formation.title")}
			</h2>

			{listToRender.map((formation, idx) => renderFormation(formation, idx))}

			<a
				href="https://drive.google.com/drive/folders/1tboNAcsG_iVxLPyT-afE4accwBHjc5dj"
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex px-6 py-3 rounded-xl bg-pink-500 text-white font-medium hover:bg-pink-600">
				{t("formation.certificates")}
			</a>
		</div>
	);
}
