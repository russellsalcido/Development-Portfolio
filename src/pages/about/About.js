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
					<Col md={4}>
						<Container className="about-box1">
							<img id="selfie" src={Selfie}></img>
						</Container>
					</Col>
					<Col md={8}>
						<Container className="about-box2">
							<h4>Location</h4>
							<h6>Chandler, Az USA</h6>
							<h4>Education</h4>
							<h6>Certified graduate of the UofA Coding Bootcamp</h6>
							<h5>Languages/Skills</h5>
							<Row>
								<Col>
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
									</ul>
								</Col>
								<Col>
									<ul>
										<li>MySQL</li>
										<li>Handlebars</li>
										<li>Sequelize</li>
										<li>Heroku</li>
										<li>MongoDB</li>
										<li>Progressive Web</li>
										<li>Apps (PWAs)</li>
										<li>React</li>
									</ul>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default About;
