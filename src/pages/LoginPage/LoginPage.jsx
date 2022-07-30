import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/Authcontext"
import MenuItemsPage from "../MenuItemsPage/MenuItemsPage";

function LoginPage() {
  let navigate = useNavigate();
  const { loginUser, authTokens, user } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
    // console.log("this "+ user.username)
    navigate('/menu')
  };

  return (
    <div className="login">
      <h1 className="text-center m-5">Sign in</h1>
      <form onSubmit={handleSubmit} className="col-lg-6 offset-lg-3 p-1">
      <hr />
        <div className="form-group">
          <div>
            <label htmlFor="username"><h6>Username</h6></label>
          </div>
          <input type="text" id="username" placeholder="Enter Username" />
        </div>
        <div className="form-group p-4">
          <div>
            <label htmlFor="password"><h6>Password</h6></label>
          </div>
          <input 
            type="password" 
            id="password" 
            placeholder="Enter Password" 
          />
        </div>
        <button type="submit" className="btn btn-dark">Login</button>
      </form>
     
    </div>
  );
};

export default LoginPage;