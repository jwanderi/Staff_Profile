import { useState } from "react";
import "./App.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost/staff-management-system/backend/auth/login.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );

    const result = await response.json();

    if (result.status === "success") {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h3>Staff Management System Login</h3>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
