import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useGlobalContext } from "../context/GlobalContext";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [globalData, updateGlobalData] = useGlobalContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGlobalData({ role: username, loggedIn: true });
    navigate("/adminDashboard");
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
