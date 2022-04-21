import About from "./About/About";
import Banner from "./Banner/Banner";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Partners from "./Partners/Partners";
import Roadmap from "./Roadmap/Roadmap";
import Team from "./Team/Team";
import Token from "./Token/Token";

function App() {
	return (
		<div className="App">
			<Header />
			<Banner />
			<About />
			<Token />
			<Roadmap />
			<Team />
			<Faq />
			<Partners />
			<Footer />
		</div>
	);
}

export default App;
