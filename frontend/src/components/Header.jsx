import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useUser } from "../context/UserContext";
import { useLogin } from "../context/LoginContext";
import Hammer from "../assets/Hammer.png";

export default function Header() {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    const { user, logout } = useUser();
    const { handleSignClick } = useLogin();

    useEffect(() => {
        if (user) {
            setLoggedIn(true)
        }
    }, [user])

    function handleLogOut() {
        logout();
        setLoggedIn(false);
    }

    function handleAccClick(bool) {
        handleSignClick(bool)
        navigate('/login')
    }

    return (
        <>
            <header>
                <div
                onClick={() => navigate('/')}
                className="header-left">
                    <img src={Hammer}
                        width="40px"
                        height="40px"
                    />
                    <h2 className="homepage-link">Trades.io</h2>
                </div>
                <div className="right-header-container">
                    <button className="home-button" onClick={() => navigate('/')}>Home</button>
                    {!loggedIn ? (
                        <>
                            <button className="login-button" onClick={() => handleAccClick(false)}>Login</button>
                            <button className="login-button" onClick={() => handleAccClick(true)}>Create account</button>
                        </>
                    ) : (
                        <>
                            <button className="postjob-button" onClick={() => navigate("/create")}>Post a Job</button>
                            <button className="profile-button" onClick={() => navigate(`/profile/${user?.user_id}`)}>{user?.username}</button>
                            <button className="profile-button" onClick={handleLogOut}>Logout</button>
                        </>
                    )}
                </div>

            </header>
        </>
    )
}

{/* Home | Search for jobs... | Login  (if logged in, Post a Job | Profile) */ }
{/* We decided to take out search for jobs on all pages, except for the home page. */ }
{/* login-postjob-container will be aligned to the right side, pending header css */ }
