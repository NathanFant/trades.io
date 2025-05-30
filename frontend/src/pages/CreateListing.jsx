import { useNavigate } from "react-router";
import { useState } from "react";
import { useUser } from "../context/UserContext";

export default function CreateListing() {

    const navigate = useNavigate();
    const { user } = useUser();
    const [listingTitle, setListingTitle] = useState("");
    const [listingDesc, setListingDesc] = useState("");
    const [listingPay, setListingPay] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [isValid, setIsValid] = useState(false); // This will evaluate the length/characters of zipcode

    const getCoordsFromZipcode = async (zipcode) => {
        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${zipcode},+united+states&key=772594138f0f41488225603a3fd8ca9c`);

        const data = await response.json();
        if (data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry;
            const roundedCoords = {
                lat: parseFloat(lat.toFixed(2)),
                lng: parseFloat(lng.toFixed(2))
            }

            return roundedCoords;
        } else {
            throw new Error("No coordinates found for Zipcode");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { lat, long } = await getCoordsFromZipcode(zipcode)

        const listingJson = {
            title: listingTitle,
            description: listingDesc,
            latitude: lat,
            longitude: long,
            price: listingPay,
            poster_id: user?.user_id,
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
                <form className="listing-form" onSubmit={(e) => handleSubmit(e)} >
                    Job Title<input
                        className="input-box"
                        placeholder="Job"
                        value={listingTitle}
                        onChange={(e) => {
                            setListingTitle(e.target.value)
                        }}
                        required/>
                    Job Description<textarea
                        className="textarea-box input-box"
                        placeholder="Description"
                        value={listingDesc}
                        onChange={(e) => {
                            setListingDesc(e.target.value)
                        }}
                        rows={6}
                        required/>
                    Job Zipcode<input
                        className="input-box"
                        placeholder="5 Digit Zipcode"
                        type="text"
                        value={zipcode}
                        onChange={(e) => {
                            setZipcode(e.target.value)
                        }}
                        required={true} />
                    Job Pay<input
                        className="input-box"
                        placeholder="Pay"
                        value={listingPay}
                        onChange={(e) => {
                            setListingPay(e.target.value)
                        }}
                        required={true}
                        />
                    <button type="submit" className="create-button">Post job</button>

                </form>



            </div>
        </>
    )



}
