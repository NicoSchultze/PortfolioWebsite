import "./topbar.scss";
import {Person, Mail, GitHub, LinkedIn, Assignment} from "@material-ui/icons"
import {FileSaver} from 'file-saver'

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
	<div className={"topbar " + (menuOpen && "active")}>
		<div className="wrapper">
			<div className="left">
				<a href="#intro" className="logo">
					Nico. ツ
				</a>
			</div>

			<div className="middle">
				<div className="itemContainer">
					<Person className="icon"/>
					<span>+49 1577 428 5277</span>
				</div>
				<div className="itemContainer" onClick={() => {navigator.clipboard.writeText("Nico.Schultze97@gmail.com")}}>
					<Mail className="icon"/>
					<span>Nico.Schultze97@gmail.com</span>
				</div>
				<div className="itemContainer">
					<a href="https://www.linkedin.com/in/nico-schultze97/" target="_blank">
						<LinkedIn className="icon"/>
						<span>LinkedIn</span>
					</a>
				</div>
				<div className="itemContainer">
					<a href="https://github.com/NicoSchultze" target="_blank">
						<GitHub className="icon"/>
						<span>GitHub</span>	
					</a>			
				</div>
				<div className="itemContainer">
					<a href="https://res.cloudinary.com/demo/image/upload/fl_attachment/sample.jpg">
						<Assignment className="icon"/>
						<span>Get my CV!</span>			
					</a>
				</div>
			</div>
			
			<div className="right">
				<div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
					<span className="line1"></span>
					<span className="line2"></span>
					<span className="line3"></span>
				</div>
			</div>
		</div>
	</div>
  )
}
