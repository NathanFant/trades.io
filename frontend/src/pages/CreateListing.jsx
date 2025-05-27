import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";

export default function CreateListing() {

    const navigate = useNavigate();
    const { user } = useUser();
    const [listingTitle, setListingTitle] = useState("");
    const [listingDesc, setListingDesc] = useState("");
    const [listingPay, setListingPay] = useState("");



    const handleSubmit = async (e) => {
        e.preventDefault();
        const listingJson = {
            title: listingTitle,
            description: listingDesc,
            price: listingPay,
            poster_i: user?.user_id,
        }

        try {
            await fetch("http://127.0.0.1:8000/listings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(listingJson)
            });
            navigate("/");
        } catch (error) {
            console.error("Error creating new listings", error);
        }
    }




    return (
        <>
            <div className="listing container">
                <h2>Create a job posting</h2>
                <form className="listing-form" onClick={handleSubmit} >
                    Job Title:{" "}<input
                    className="input-box"
                    placeholder="Job..."
                    value={listingTitle}
                    onChange={(e) => {
                        setListingTitle(e.target.value)
                    }}
                    />
                    Job Description:{" "}<textarea
                    className="input-box textarea-box"
                    placeholder="Description..."
                    value={listingDesc}
                    onChange={(e) => {
                        setListingDesc(e.target.value)
                    }}
                    rows={6}
                     />
                    Job Pay:{" "}<input
                    className="input-box"
                    placeholder="Pay..."
                    value={listingPay}
                    onChange={(e) => {
                        setListingPay(e.target.value)
                    }}
                    />

                </form>



            </div>
        </>
    )



}
