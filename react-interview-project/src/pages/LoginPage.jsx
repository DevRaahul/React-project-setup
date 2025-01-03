import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../App.css";
import "./LoginPage.css";
import { useGlobalContext } from "../context/GlobalContext";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [globalData, updateGlobalData] = useGlobalContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGlobalData({ role: username, loggedIn: true });
    if (username.toLowerCase() === "admin") {
      navigate("/adminDashboard");
    } else {
      navigate("/Dashboard");
    }
  };

  return (
    // <div className="container">
    //   <h1>Login</h1>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="username">Username: </label>
    //       <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Password: </label>
    //       <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //     </div>
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
    <div class="box">
      <div class="container">
        <div class="top-header">
          <header>Login</header>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="input-field">
            <input
              type="text"
              class="input"
              placeholder="Username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <i class="bx bx-user"></i>
          </div>
          <div class="input-field">
            <input
              type="password"
              class="input"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i class="bx bx-lock-alt"></i>
          </div>
          <div class="input-field">
            <input type="submit" class="submit" value="Login" />
          </div>
        </form>
        <div class="bottom">
          <div class="right">
            <label>
              <a href="#">Forgot password?</a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
