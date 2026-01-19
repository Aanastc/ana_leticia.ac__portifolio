import {
	BrowserRouter,
	Route,
	BrowserRouter as Router,
	Routes,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Projetos from "./Pages/Projetos.jsx";
import SobreMim from "./Pages/SobreMim.jsx";
import Layout from "./Components/Layout.jsx";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/sobreMim" element={<SobreMim />} />
					<Route path="/projetos" element={<Projetos />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
