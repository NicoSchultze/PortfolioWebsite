import "./about.scss";

export default function About() {
	return (
	<div className="about" id="about">
		<div className="left">
			<div className="bg-card">
				
			</div>
			<div className="front-card">
				<img src="assets/me1.jpg" alt="" className="card-img"/>
			</div>
		</div>
		<div className="right">
			<h1 className="title">
				About Me
			</h1>
			<p className="subtext">I am Nico Schultze from Berlin, Germany! I am currently pursuing my postgraduate degree in Computer Science. </p>
			<p className="description">I like to develop websites in my free time, as well as machine learning projects and small mobile applications.
            You can check out reference projects in my portfolio! Next to my software interests, I like to run and play chess. Furthermore, I have a deep passion for travelling the world.  
            As of now, I am working for the Mercedes-Benz Group within a machine learning project for the production of electrical vehicles.</p>
			<div className="award">
				<img src="assets/degree.png" className="award-img" alt="" />
				<div className="award-text">
					<h4 className="award-title">Bachelor's Degree - May 2022</h4>
					<p className="award-desc">
					I finished my Bachelor's Degree in May 2022 with the major of Business Computing. I graduated at the University of Applied Sciences (HTW) in Berlin with a CGPA of 4.0.
					</p>
				</div>
			</div>
		</div>
	</div>
	)
}
