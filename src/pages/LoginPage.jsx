import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/Authcontext"
import MenuItemsPage from "./MenuItemsPage/MenuItemsPage";

function LoginPage() {
  let navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
    navigate('/menu')
  };

  
  return (
    <div className="login">
      <h1 className="text-center">FullSnax</h1>
      <form onSubmit={handleSubmit} className="col-lg-6 offset-lg-3">
        <div className="form-group">
          <div>
            <label htmlFor="username"><h2>Username</h2></label>
          </div>
          <input type="text" id="username" placeholder="Enter Username" />
        </div>
        <div className="form-group">
          <div>
            <label htmlFor="password"><h2>Password</h2></label>
          </div>
          <input 
            type="password" 
            id="password" 
            placeholder="Enter Password" 
          />
        </div>
        <button type="submit" className="btn btn-secondary">Login</button>
      </form>
     
    </div>
  );
};

export default LoginPage;