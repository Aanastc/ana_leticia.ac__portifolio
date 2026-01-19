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
		<nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 shadow">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<Link
						to="/"
						className="flex items-center gap-1"
						onClick={() => setMenuOpen(false)}>
						<img src={Logo} alt="Logo Ana Letícia" className="w-8" />
						<span className="font-bold text-xl text-pink-500">
							Ana Letícia · Portfólio
						</span>
					</Link>

					<div className="hidden md:flex items-center gap-6">
						{navLinks.map((link) => (
							<Link
								key={link.path}
								to={link.path}
								className={`flex items-center gap-1 transition-colors ${
									isActive(link.path)
										? "text-pink-500"
										: "text-gray-700 dark:text-gray-200 hover:text-pink-500"
								}`}>
								{link.icon}
								{link.label}
							</Link>
						))}

						<button
							onClick={toggleLanguage}
							className="px-3 py-1 text-sm font-semibold border border-pink-500 text-pink-500 rounded hover:bg-pink-500 hover:text-white transition">
							{i18n.language === "pt" ? "EN" : "PT"}
						</button>

						<ThemeToggleButton />
					</div>

					<div className="md:hidden flex items-center gap-2">
						<button
							onClick={toggleLanguage}
							className="px-3 py-1 text-sm font-semibold border border-pink-500 text-pink-500 rounded">
							{i18n.language === "pt" ? "EN" : "PT"}
						</button>

						<ThemeToggleButton />

						<button
							onClick={() => setMenuOpen(!menuOpen)}
							className="text-gray-700 dark:text-gray-200">
							{menuOpen ? <XIcon size={24} /> : <ListIcon size={24} />}
						</button>
					</div>
				</div>
			</div>

			{menuOpen && (
				<div className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4 space-y-2">
					{navLinks.map((link) => (
						<Link
							key={link.path}
							to={link.path}
							onClick={() => setMenuOpen(false)}
							className={`flex items-center gap-2 px-3 py-2 rounded transition-colors ${
								isActive(link.path)
									? "text-pink-500 bg-gray-100 dark:bg-gray-700"
									: "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
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
