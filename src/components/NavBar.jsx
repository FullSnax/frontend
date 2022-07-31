import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from "../context/Authcontext"
import { useContext } from 'react'
import Logout from './Logout';
import MyProfilePage from '../pages/MyProfilePage/MyProfilePage';

export default function NavBar() {

	const { user, logoutUser } = useContext(AuthContext);
  <MyProfilePage user={user}/>

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
					
					<h6 id='welcome'>{user ?
						`Welcome, ${user.username}` : "Please sign in or register"}
					</h6>
					
					<div>
						<Logout />
						</div>
				</ReactBootStrap.Navbar.Collapse>
			</ReactBootStrap.Navbar>
		</div>
	);
}
