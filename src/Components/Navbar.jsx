import { useState } from "react";
import {
	EnvelopeSimpleIcon,
	FolderDashedIcon,
	HouseIcon,
	ListIcon,
	XIcon,
} from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Navbar() {
	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);

	const isActive = (path) => location.pathname === path;

	const navLinks = [
		{ path: "/", label: "Home", icon: <HouseIcon size={20} /> },
		{
			path: "/sobreMim",
			label: "Sobre Mim",
			icon: <EnvelopeSimpleIcon size={20} />,
		},
		{
			path: "/projetos",
			label: "Projetos",
			icon: <FolderDashedIcon size={20} />,
		},
	];

	return (
		<nav className="bg-white dark:bg-gray-800 shadow">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					{/* Logo ou título */}
					<div className="flex-shrink-0 font-bold text-xl text-pink-500">
						Ana Letícia - Portifólio
					</div>

					{/* Menu desktop */}
					<div className="hidden md:flex gap-6 items-center">
						{navLinks.map((link) => (
							<Link
								key={link.path}
								to={link.path}
								className={`flex items-center gap-1 ${
									isActive(link.path)
										? "text-pink-500"
										: "text-gray-700 dark:text-gray-200"
								} hover:text-pink-500 transition-colors duration-200`}>
								{link.icon} {link.label}
							</Link>
						))}
						<ThemeToggleButton />
					</div>

					{/* Botão mobile */}
					<div className="md:hidden flex items-center">
						<ThemeToggleButton />
						<button
							onClick={() => setMenuOpen(!menuOpen)}
							className="ml-2 text-gray-700 dark:text-gray-200 focus:outline-none">
							{menuOpen ? <XIcon size={24} /> : <ListIcon size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Menu mobile */}
			{menuOpen && (
				<div className="md:hidden bg-white dark:bg-gray-800 px-4 pt-2 pb-4 space-y-2">
					{navLinks.map((link) => (
						<Link
							key={link.path}
							to={link.path}
							onClick={() => setMenuOpen(false)}
							className={`flex items-center gap-1 px-2 py-2 rounded ${
								isActive(link.path)
									? "text-pink-500 bg-gray-100 dark:bg-gray-700"
									: "text-gray-700 dark:text-gray-200 hover:text-pink-500 hover:bg-gray-100 dark:hover:bg-gray-700"
							} transition-colors duration-200`}>
							{link.icon} {link.label}
						</Link>
					))}
				</div>
			)}
		</nav>
	);
}
