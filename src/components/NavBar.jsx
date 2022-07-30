import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from "../context/Authcontext"
import { useContext } from 'react'
import Logout from './Logout';

export default function NavBar() {

	const { user, logoutUser } = useContext(AuthContext);
  // console.log(user.username)

	return (
		<div className="App">
			<ReactBootStrap.Navbar
				collapseOnSelect
				expand="xl"
				bg="dark"
				variant="dark"
			>
				{/* <Link to="/home"> */}
				<ReactBootStrap.Nav.Link to="/home">
					<ReactBootStrap.Navbar.Brand id="brand-logo" className="nav-link" href='/home'>
						FullSnax
						</ReactBootStrap.Navbar.Brand>
						</ReactBootStrap.Nav.Link>
				{/* </Link> */}
				<ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
					<ReactBootStrap.Nav className="mr-auto">
						<Link to="/about">
							<ReactBootStrap.Nav.Link className="nav-link" href="/about">
								About
							</ReactBootStrap.Nav.Link>
						</Link>
						<Link to="/menu">
							<ReactBootStrap.Nav.Link className="nav-link" href="/menu">
								Menu
							</ReactBootStrap.Nav.Link>
						</Link>
					</ReactBootStrap.Nav>
					<ReactBootStrap.Nav>
						<Link to="/profile">
							<ReactBootStrap.Nav.Link href="/profile">
								View Profile
							</ReactBootStrap.Nav.Link>
						</Link>
						<Link to="/orders">
							<ReactBootStrap.Nav.Link
								className="nav-link"
								href="/orders"
								eventKey={2}
							>
								My Orders
							</ReactBootStrap.Nav.Link>
						</Link>
					</ReactBootStrap.Nav>
					<h5 className='welcome'>{user ? `Welcome, ${user.username}` : "Please sign in or register!" }</h5>
					<Logout />
				</ReactBootStrap.Navbar.Collapse>
			</ReactBootStrap.Navbar>
		</div>
	);
}
