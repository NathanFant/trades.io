import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();



    return (
        <>
            <header>
                <h2 className="homepage-link">BCF.COM</h2>
            </header>
        </>
    )
}

{/* <header className="homepage-header">
        <h1>BCF.COM</h1>
        <div><h2>Welcome to Blue Collar Fiverr</h2></div>
        <div className="header-buttons">
          <button onClick={() => alert("Login clicked")}>Login</button>
          <button onClick={() => alert("Post Job clicked")}>Post a Job</button>
        </div>
      </header> */}

{/* Home | Search for jobs... | Login  (if logged in, Post a Job | Profile) */}
