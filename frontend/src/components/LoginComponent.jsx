import { useUser } from "../context/UserContext";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function LoginForm({ handleSignClick }) {

    const { login } = useUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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
            login(data);
            navigate('/')
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
                type="email"
                required
                />
                <input
                placeholder="password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="input-box"
                required
                />
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
  );
}
