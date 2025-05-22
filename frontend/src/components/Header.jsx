import { useState, useContext } from "react";
import { useNavigate } from "react-router";

export default function Header() {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);



    return (
        <>
            <header>
                <h2 onClick={() => navigate('/')} className="homepage-link">BCF.COM</h2>
                <div className="right-header-container">
                    {!loggedIn ? (
                        <button className="login-button" onClick={() => navigate('/login')}>Login</button>
                    ) : (
                        <>
                        <button className="postjob-button" onClick={() => alert("Post a job clicked")}>Post a Job</button>
                        <button className="profile-button" onClick={() => alert("Profile clicked")}>Profile</button>
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
