import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/Authcontext';
import NavBar from './NavBar';

export default function Logout() {
	const { user, logoutUser } = useContext(AuthContext);

	return (
		<div>
			{user ? (
				<button
					id="logout-btn"
					className="btn btn-light"
					onClick={logoutUser}
				>
					Logout
				</button>
			) : (
				<>
					<>
						<Link to="/login">
							<div className="navbar-nav me-auto mt-0">
								<h6 id="log-link">Login</h6>
							</div>
						</Link>
						<br />
					</>
					<>
						<Link to="/register">
							<div className="navbar-nav me-auto mt-0">
								<h6 id="reg-link">Register</h6>
							</div>
						</Link>
					</>
				</>
			)}
		</div>
	);
}
