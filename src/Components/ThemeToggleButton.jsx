import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const ThemeToggleButton = () => {
	// Inicializa o tema com base no localStorage ou no sistema
	const [theme, setTheme] = useState(() => {
		if (typeof window !== "undefined") {
			const storedTheme = localStorage.getItem("theme");
			return (
				storedTheme ||
				(window.matchMedia("(prefers-color-scheme: dark)").matches
					? "dark"
					: "light")
			);
		}
		return "light"; // Valor padrão
	});

	useEffect(() => {
		if (typeof document !== "undefined") {
			const html = document.documentElement;
			if (theme === "dark") {
				html.classList.add("dark");
				html.setAttribute("data-theme", "dark");
			} else {
				html.classList.remove("dark");
				html.removeAttribute("data-theme");
			}
			localStorage.setItem("theme", theme);
		}
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<button
			onClick={toggleTheme}
			className="p-2 rounded-md bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 transition-colors duration-200 flex items-center justify-center gap-2">
			{theme === "light" ? <MoonIcon size={20} /> : <SunIcon size={20} />}
		</button>
	);
};

export default ThemeToggleButton;
