import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ScrollToTopButton from "./ScrollToTopButton";

export default function Layout() {
	return (
		<>
			<Navbar />

			<main className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
				<Outlet />
			</main>
			<ScrollToTopButton />
		</>
	);
}
