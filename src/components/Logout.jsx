import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/Authcontext';
import NavBar from './NavBar';

export default function Logout() {
	const { user, logoutUser } = useContext(AuthContext);

	return (
		<div>
			{user ? (
				<>
					<Link to="/login">
						<h1>Protected</h1>
					</Link>
					<button onClick={logoutUser}>Logout</button>
				</>
			) : (
				<>
					<Link to="/login">
						<h1 className="navbar-nav me-auto mb-2 mb-lg-0">
							Login
						</h1>
					</Link>
					<Link to="/register">
						<h1 className="navbar-nav me-auto mb-2 mb-lg-0">
							Register
						</h1>
					</Link>
				</>
			)}
		</div>
	);
}
