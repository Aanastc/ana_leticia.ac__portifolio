import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@phosphor-icons/react";

export default function ScrollToTopButton() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			setVisible(window.scrollY > 300);
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	if (!visible) return null;

	return (
		<button
			onClick={scrollToTop}
			aria-label="Voltar ao topo"
			className="
				fixed bottom-6 right-6 z-50
				p-3 rounded-full
				bg-pink-500 text-white
				shadow-lg
				hover:bg-pink-600
				transition
			">
			<ArrowUpIcon size={20} weight="bold" />
		</button>
	);
}
