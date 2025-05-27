import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router";
import { useState } from "react";


export default function CreateUser({ handleSignClick }) {
    const { login } = useUser();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    const handleCreation = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            });

            if (!response.ok) {
                throw new Error("Username/Email already taken!");
            }


            const data = await response.json();
            login(data);
            handleSignClick(false)
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    }


    return (
        <div className="login-box">
            <form onSubmit={handleCreation}>
                <h2>Create an account</h2>
                {error && <p className="error">{error}</p>}
                <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
                className="input-box"
                type="text"
                required
                />
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
                <button type="submit" className="login-button">Create account</button>
            </form>
        </div>
    )
}
