import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import About from "./components/about/About"
import "./app.scss"

function App() {
	return (
	<div className="app">
		<Topbar/>
		<div className="sections">
			<Intro/>
			<About/>
			<Works/>
			<Portfolio/>
			<Contact/>
		</div>
	</div>
	);
}

export default App;
