import { useState } from "react";
import TabsMenu from "./TabsMenu";
import ContentWrapper from "./ContentWrapper";

export default function Sobre() {
	const [activeTab, setActiveTab] = useState("historia");

	return (
		<div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
			<TabsMenu activeTab={activeTab} onChange={setActiveTab} />

			<ContentWrapper activeTab={activeTab} />
		</div>
	);
}
