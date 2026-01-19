import { useState } from "react";
import TabsMenu from "../Components/Sobre/TabsMenu";
import ContentWrapper from "../Components/Sobre/ContentWrapper";

export default function SobreMim() {
	const [activeTab, setActiveTab] = useState("historia");

	return (
		<section className="max-w-6xl mx-auto px-6 py-12 text-gray-900 dark:text-gray-100">
			<h1 className="text-4xl font-bold text-pink-500 mb-10">Sobre Mim</h1>

			<div className="grid md:grid-cols-[260px_1fr] gap-10">
				<TabsMenu activeTab={activeTab} onChange={setActiveTab} />
				<ContentWrapper activeTab={activeTab} />
			</div>
		</section>
	);
}
