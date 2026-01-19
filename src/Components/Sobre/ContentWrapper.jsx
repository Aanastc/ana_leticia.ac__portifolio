import Historia from "./Historia";
import Experiencia from "./Experiencia";
import Habilidades from "./Habilidades";
import Formacao from "./Formacao";

export default function ContentWrapper({ activeTab }) {
	return (
		<div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-md min-h-[300px] border-emerald-800 border-2">
			{activeTab === "historia" && <Historia />}
			{activeTab === "experiencia" && <Experiencia />}
			{activeTab === "habilidades" && <Habilidades />}
			{activeTab === "formacao" && <Formacao />}
		</div>
	);
}
