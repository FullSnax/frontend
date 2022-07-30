import { useState, useContext } from "react";
import AuthContext from "../../context/Authcontext"

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(username, password, password2, email);
  };

 

  return (
    <><div className="signup">
          <h1 className="text-center m-5">Registration</h1>
          <form onSubmit={handleSubmit} className="col-lg-6 offset-lg-3 p-1">
              <hr />
              <div className="form-group p-3">
                  <div>
                      <label htmlFor="username"><h6>Username</h6></label>
                  </div>
                  <input
                      type="text"
                      id="username"
                      onChange={e => setUsername(e.target.value)}
                      placeholder="Enter Username"
                      required />
              </div>

              <div className="form-group p-3">
                  <div>
                      <label htmlFor="password"><h6>Password</h6></label>
                  </div>
                  <input
                      type="password"
                      id="password"
                      onChange={e => setPassword(e.target.value)}
                      placeholder="Enter Password"
                      required />
              </div>
              <div className="form-group p-3">
                  <div>
                      <label htmlFor="password"><h6>Confirm</h6></label>
                  </div>
                  <input
                      type="password"
                      id="confirm-password"
                      onChange={e => setPassword2(e.target.value)}
                      placeholder="Confirm Password"
                      required />
              </div>
              <div className="form-group p-3">
                  <div>
                      <label htmlFor="email"><h6>Email</h6></label>
                  </div>
                  <input
                      type="email"
                      id="email"
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Enter Email"
                      required />
              </div>
              <p>{password2 !== password ? "Passwords do not match" : ""}</p>
          <button type="submit" className="btn btn-dark">Register</button>
      </form>
      
      </div>
      </>
      );
    }
    
export default RegisterPage;