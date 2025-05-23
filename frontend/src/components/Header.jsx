import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useUser } from "../context/UserContext";

export default function Header() {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    const { user, logout } = useUser();

    useEffect(() => {
        if (user) {
            setLoggedIn(true)
        }
    }, [user])

    function handleLogOut() {
        logout();
        setLoggedIn(false);
    }

    return (
        <>
            <header>
                <h2 onClick={() => navigate('/')} className="homepage-link">BCF.COM</h2>
                <div className="right-header-container">
                    {!loggedIn ? (
                        <button className="login-button" onClick={() => navigate('/login')}>Login</button>
                    ) : (
                        <>
                        <button className="postjob-button" onClick={() => navigate("/create")}>Post a Job</button>
                        <button className="profile-button" onClick={() => alert("Profile clicked")}>{user?.username}</button>
                        <button className="profile-button" onClick={handleLogOut}>Logout</button>
                        </>
                    )}
               </div>

            </header>
        </>
    )
}

{/* Home | Search for jobs... | Login  (if logged in, Post a Job | Profile) */}
{/* We decided to take out search for jobs on all pages, except for the home page. */}
{/* login-postjob-container will be aligned to the right side, pending header css */}
