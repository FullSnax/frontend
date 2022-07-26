import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<div className="App">
			<ReactBootStrap.Navbar
				collapseOnSelect
				expand="xl"
				bg="dark"
				variant="dark"
      >
        {/* <Link to=""> */}
							{/* <ReactBootStrap.Nav.Link href=""> */}
				<ReactBootStrap.Navbar.Brand id="logo">
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
						<Link to="/">
							<ReactBootStrap.Nav.Link href="/">
								Home
							</ReactBootStrap.Nav.Link>
						</Link>
					</ReactBootStrap.Nav>
					<ReactBootStrap.Nav>
						<Link to="/profile">
							<ReactBootStrap.Nav.Link href="#profile">
								My Profile
							</ReactBootStrap.Nav.Link>
						</Link>
						<Link to="/orders">
							<ReactBootStrap.Nav.Link href="#orders" eventKey={2}>
								My Orders
							</ReactBootStrap.Nav.Link>
						</Link>
					</ReactBootStrap.Nav>
				</ReactBootStrap.Navbar.Collapse>
			</ReactBootStrap.Navbar>
		</div>
	);
}
