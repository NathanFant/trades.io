import { useState } from "react";

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data));
      onLoginSuccess(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-box">
      <form onSubmit={handleLogin}>
        <h2>Login Page</h2>
        {error && <p className="error">{error}</p>}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="input-box"
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-box"
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}
