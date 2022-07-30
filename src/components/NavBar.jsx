import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from "../context/Authcontext"
import { useContext } from 'react'
import LoginPage from '../pages/LoginPage/LoginPage';

export default function NavBar() {

	const { user } = useContext(AuthContext);
  // console.log(user.username)

	return (
		<div className="App">
			<ReactBootStrap.Navbar
				collapseOnSelect
				expand="xl"
				bg="dark"
				variant="dark"
			>
				{/* <Link to="/"> */}
				{/* <ReactBootStrap.Nav.Link to="/"> */}
					<ReactBootStrap.Navbar.Brand id="brand-logo" href="#about">
						FullSnax
						</ReactBootStrap.Navbar.Brand>
						{/* </ReactBootStrap.Nav.Link> */}
				{/* </Link> */}
				<ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
					<ReactBootStrap.Nav className="mr-auto">
						<Link to="/about">
							<ReactBootStrap.Nav.Link href="#about">
								About
							</ReactBootStrap.Nav.Link>
						</Link>
						<Link to="/menu">
							<ReactBootStrap.Nav.Link href="#menu">
								Menu
							</ReactBootStrap.Nav.Link>
						</Link>
					</ReactBootStrap.Nav>
					<ReactBootStrap.Nav>
						<Link to="/profile">
							<ReactBootStrap.Nav.Link href="#profile">
								View Profile
							</ReactBootStrap.Nav.Link>
						</Link>
						<Link to="/orders">
							<ReactBootStrap.Nav.Link
								href="#orders"
								eventKey={2}
							>
								My Orders
							</ReactBootStrap.Nav.Link>
						</Link>
					</ReactBootStrap.Nav>
					<h5 className='welcome'>Welcome, {user.email}!</h5>
				</ReactBootStrap.Navbar.Collapse>
			</ReactBootStrap.Navbar>
		</div>
	);
}
