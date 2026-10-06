import { useState } from "react";
import {
	EnvelopeSimpleIcon,
	FolderDashedIcon,
	HouseIcon,
	ListIcon,
	XIcon,
} from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeToggleButton from "./ThemeToggleButton";
import Logo from "../assets/imgs/logo.png";

export default function Navbar() {
	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);
	const { i18n, t } = useTranslation();

	const isActive = (path) => location.pathname === path;

	const toggleLanguage = () => {
		const newLang = i18n.language === "pt" ? "en" : "pt";
		i18n.changeLanguage(newLang);
	};

	const navLinks = [
		{
			path: "/",
			label: t("nav.home"),
			icon: <HouseIcon size={20} />,
		},
		{
			path: "/sobreMim",
			label: t("nav.about"),
			icon: <EnvelopeSimpleIcon size={20} />,
		},
		{
			path: "/projetos",
			label: t("nav.projects"),
			icon: <FolderDashedIcon size={20} />,
		},
	];

	return (
		<nav className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<Link
						to="/"
						className="flex items-center gap-2 group"
						onClick={() => setMenuOpen(false)}>
						<img src={Logo} alt="Logo Ana Letícia" className="w-8 group-hover:rotate-12 transition-transform duration-300" />
						<span className="font-bold text-xl text-pink-500 tracking-tight">
							Ana Letícia <span className="text-gray-400 dark:text-gray-500 font-light">|</span> Portfólio
						</span>
					</Link>

					<div className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<Link
								key={link.path}
								to={link.path}
								className={`relative flex items-center gap-1.5 py-1 px-1 transition-all duration-300 group ${
									isActive(link.path)
										? "text-pink-500 font-medium"
										: "text-gray-700 dark:text-gray-300 hover:text-pink-500"
								}`}>
								<span className="group-hover:scale-110 transition-transform">{link.icon}</span>
								{link.label}
								{isActive(link.path) && (
									<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-500 rounded-full" />
								)}
							</Link>
						))}

						<div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-700 mx-2" />

						<button
							onClick={toggleLanguage}
							className="px-4 py-1.5 text-xs font-bold border-2 border-pink-500 text-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition-all duration-300 active:scale-95">
							{i18n.language === "pt" ? "EN" : "PT"}
						</button>

						<ThemeToggleButton />
					</div>

					<div className="md:hidden flex items-center gap-3">
						<button
							onClick={toggleLanguage}
							className="px-3 py-1 text-xs font-bold border-2 border-pink-500 text-pink-500 rounded-lg">
							{i18n.language === "pt" ? "EN" : "PT"}
						</button>

						<ThemeToggleButton />

						<button
							onClick={() => setMenuOpen(!menuOpen)}
							className="text-gray-700 dark:text-gray-200 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
							{menuOpen ? <XIcon size={28} weight="bold" /> : <ListIcon size={28} weight="bold" />}
						</button>
					</div>
				</div>
			</div>

			{menuOpen && (
				<div className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg px-4 pb-6 pt-2 space-y-3 animate-in fade-in slide-in-from-top-4 duration-300">
					{navLinks.map((link) => (
						<Link
							key={link.path}
							to={link.path}
							onClick={() => setMenuOpen(false)}
							className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
								isActive(link.path)
									? "text-pink-500 bg-pink-50 dark:bg-pink-500/10 font-bold"
									: "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
							}`}>
							{link.icon}
							{link.label}
						</Link>
					))}
				</div>
			)}
		</nav>
	);
}
