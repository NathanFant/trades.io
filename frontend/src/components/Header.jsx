import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const { loggedIn } = useContext(UserContext);



    return (
        <>
            <header>
                <h2 className="homepage-link">BCF.COM</h2>
                <div className="right-header-container">
                    {!loggedIn ? (
                        <button className="login-button" onClick={() => alert("Login clicked")}>Login</button>
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
