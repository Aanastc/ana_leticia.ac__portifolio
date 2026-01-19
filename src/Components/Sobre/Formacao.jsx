import { useTranslation } from "react-i18next";

export default function Formacao() {
	const { t } = useTranslation();

	const postGrad = t("formation.postGrad", { returnObjects: true });
	const grad = t("formation.grad", { returnObjects: true });

	const renderFormation = (formation) => (
		<div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 space-y-4">
			<div>
				<h3 className="font-semibold">{formation.title}</h3>
				<p className="text-sm text-gray-600 dark:text-gray-400">
					{formation.institution} • {formation.period}
				</p>
			</div>

			<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
				{formation.description}
			</p>

			{/* Stacks */}
			<div className="flex flex-wrap gap-2">
				{formation.stacks.map((stack, index) => (
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
		<div className="space-y-8">
			<h2 className="text-2xl font-semibold text-pink-500">
				{t("formation.title")}
			</h2>

			{renderFormation(postGrad)}
			{renderFormation(grad)}

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
