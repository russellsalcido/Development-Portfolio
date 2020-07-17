import React from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { LinkContainer } from "react-router-bootstrap";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";

import "./App.css";

const App = () => (
	<MemoryRouter>
		<Container className="p-3">
			<Jumbotron id="jumbo">
				<h1 className="header">X</h1>
				<ButtonToolbar className="custom-btn-toolbar">
					<LinkContainer to="/">
						<Button variant="outline-light">Home</Button>
					</LinkContainer>
					<LinkContainer to="/about">
						<Button variant="outline-light">About</Button>
					</LinkContainer>
					<LinkContainer to="/portfolio">
						<Button variant="outline-light">Portfolio</Button>
					</LinkContainer>
					<LinkContainer to="/contact">
						<Button variant="outline-light">Contact</Button>
					</LinkContainer>
				</ButtonToolbar>
			</Jumbotron>
			<h2>
				{" "}
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/portfolio">
						<Portfolio />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</h2>
		</Container>
	</MemoryRouter>
);

export default App;
