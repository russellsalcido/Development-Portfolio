import React from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import OpenSesame from "../../images/open-sesame.jpg";
import EatYourFeels from "../../images/EatYourFeels.jpg";
import Uplift from "../../images/Uplift.jpg";
import EmpManager from "../../images/EmpManager.jpg";
import NoteTaker from "../../images/NoteTaker.jpg";
import CodeQuiz from "../../images/CodeQuiz.jpg";

import "./ProjectCard.css";

function Portfolio() {
	return (
		<div>
			<h1>Portfolio Page</h1>
			<Row>
				<Col>
					<Container className="card-box">
						<Card style={{ width: "20rem" }} id="card-main">
							<Card.Img variant="top" src={OpenSesame} />
							<Card.Body>
								<Card.Title className="card-title">Open Sesame</Card.Title>
								<Card.Text className="card-text">
									Open Sesame is a secure location, protected by Helmet and
									Passport, which allows a user to store all usernames and
									passwords. There is even an easy to use password generator
									that creates a highly secure password for you.
								</Card.Text>
							</Card.Body>
							<Card.Body className="card-link">
								<Card.Link href="#">Click Here</Card.Link>
							</Card.Body>
						</Card>
						<Card style={{ width: "20rem" }} id="card-main">
							<Card.Img variant="top" src={EatYourFeels} />
							<Card.Body>
								<Card.Title className="card-title">Eat Your Feels</Card.Title>
								<Card.Text className="card-text">
									A fun activity that helps one identify and track how they are
									coping with the issues of the human condition.
								</Card.Text>
							</Card.Body>
							<Card.Body className="card-link">
								<Card.Link href="#">Click Here</Card.Link>
							</Card.Body>
						</Card>
						<Card style={{ width: "20rem" }} id="card-main">
							<Card.Img variant="top" src={Uplift} />
							<Card.Body>
								<Card.Title className="card-title">Uplift</Card.Title>
								<Card.Text className="card-text">
									We all have those moments of stress in our lives; its an
									inevitability. Uplift comes with a simple and streamlined way
									to reduce stress or anxiety using a quick burst of energy,
									whether it be for the body, mind, or soul. Simply pick a
									category, sit back, relax, and let the stress melt away.
								</Card.Text>
							</Card.Body>
							<Card.Body className="card-link">
								<Card.Link href="#">Click Here</Card.Link>
							</Card.Body>
						</Card>
					</Container>
					<Container className="card-box">
						<Card style={{ width: "20rem" }} id="card-main">
							<Card.Img variant="top" src={EmpManager} />
							<Card.Body>
								<Card.Title className="card-title">Employee Manager</Card.Title>
								<Card.Text className="card-text">
									Open Sesame is a secure location, protected by Helmet and
									Passport, which allows a user to store all usernames and
									passwords. There is even an easy to use password generator
									that creates a highly secure password for you.
								</Card.Text>
							</Card.Body>
							<Card.Body className="card-link">
								<Card.Link href="#">Click Here</Card.Link>
							</Card.Body>
						</Card>
						<Card style={{ width: "20rem" }} id="card-main">
							<Card.Img variant="top" src={NoteTaker} />
							<Card.Body>
								<Card.Title className="card-title">Note Taker</Card.Title>
								<Card.Text className="card-text">
									Open Sesame is a secure location, protected by Helmet and
									Passport, which allows a user to store all usernames and
									passwords. There is even an easy to use password generator
									that creates a highly secure password for you.
								</Card.Text>
							</Card.Body>
							<Card.Body className="card-link">
								<Card.Link href="#">Click Here</Card.Link>
							</Card.Body>
						</Card>
						<Card style={{ width: "20rem" }} id="card-main">
							<Card.Img variant="top" src={CodeQuiz} />
							<Card.Body>
								<Card.Title className="card-title">Code Quiz</Card.Title>
								<Card.Text className="card-text">
									Open Sesame is a secure location, protected by Helmet and
									Passport, which allows a user to store all usernames and
									passwords. There is even an easy to use password generator
									that creates a highly secure password for you.
								</Card.Text>
							</Card.Body>
							<Card.Body className="card-link">
								<Card.Link href="#">Click Here</Card.Link>
							</Card.Body>
						</Card>
					</Container>
				</Col>
			</Row>
		</div>
	);
}

export default Portfolio;
