import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Selfie from "../../images/Selfie.jpg";

import "./About.css";

function About() {
	return (
		<div>
			<h1>About Page</h1>
			<Container flex id="big-box">
				<Row>
					<Container md={1} className="about-box1">
						<img id="selfie" src={Selfie}></img>
					</Container>
					<Container md={9} className="about-box2">
						<h1>Location</h1>
						<h5>Chandler, Az USA</h5>
						<h1>Education</h1>
						<h5>Certified graduate of the UofA Coding Bootcamp</h5>
						<h2>Languages/Skills</h2>
						<ul>
							<li>HTML/CSS</li>
							<li>Git</li>
							<li>Bootstrap</li>
							<li>JavaScript</li>
							<li>jQuery</li>
							<li>APIs</li>
							<li>AJAX</li>
							<li>Node</li>
							<li>Express</li>
							<li>MySQL</li>
							<li>Handlebars</li>
							<li>Sequelize</li>
							<li>Heroku</li>
							<li>MongoDB</li>
							<li>Progressive Web</li>
							<li>Apps (PWAs)</li>
							<li>React</li>
						</ul>
					</Container>
				</Row>
			</Container>
		</div>
	);
}

export default About;
