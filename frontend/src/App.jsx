import { useState } from "react";
import Login from "./Login";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Staff Management System</h2>
      <p>Welcome, Admin</p>
    </div>
  );
}

export default App;
