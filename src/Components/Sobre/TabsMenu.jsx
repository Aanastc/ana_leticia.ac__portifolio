import { useTranslation } from "react-i18next";
import {
	BookOpenIcon,
	BriefcaseIcon,
	CodeBlockIcon,
	GraduationCapIcon,
} from "@phosphor-icons/react";

export default function TabsMenu({ activeTab, onChange }) {
	const { t } = useTranslation();

	const tabs = [
		{ id: "historia", label: t("tabs.historia"), icon: BookOpenIcon },
		{ id: "experiencia", label: t("tabs.experiencia"), icon: BriefcaseIcon },
		{ id: "habilidades", label: t("tabs.habilidades"), icon: CodeBlockIcon },
		{ id: "formacao", label: t("tabs.formacao"), icon: GraduationCapIcon },
	];

	return (
		<nav aria-label={t("tabs.navigation")} className="w-full md:w-64">
			<ul
				className="
					flex md:flex-col
					gap-2 md:gap-3
				">
				{tabs.map(({ id, label, icon: Icon }) => {
					const isActive = activeTab === id;

					return (
						<li key={id} className="flex-1 md:flex-none">
							<button
								onClick={() => onChange(id)}
								aria-current={isActive ? "page" : undefined}
								className={`
									w-full
									h-16 md:h-auto
									flex flex-col md:flex-row
									items-center md:items-center
									justify-center md:justify-start
									gap-1.5 md:gap-3
									px-3 py-2 md:px-4 md:py-3
									rounded-xl
									text-xs md:text-base
									font-medium
									transition-all
									${
										isActive
											? "bg-pink-500 text-white shadow-md"
											: "bg-gray-100 dark:bg-gray-800 hover:bg-pink-100 dark:hover:bg-gray-700"
									}
								`}>
								<Icon size={22} weight={isActive ? "bold" : "regular"} />
								<span className="leading-tight text-center">{label}</span>
							</button>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
