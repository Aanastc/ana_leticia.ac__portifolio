import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Projetos from "./pages/Projetos";
import SobreMim from "./Pages/SobreMim";

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
