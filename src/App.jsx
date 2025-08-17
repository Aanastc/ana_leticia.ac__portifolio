import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Projetos from "./pages/Projetos.jsx";
import SobreMim from "./Pages/SobreMim.jsx";

export default function App() {
	return (
		<Router>
			<div className="min-h-screen bg-gray-100 dark:bg-gray-900">
				<Navbar />
				<main className="p-6">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/sobreMim" element={<SobreMim />} />
						<Route path="/projetos" element={<Projetos />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
}
