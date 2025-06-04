import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";


export default function CreateListing() {

    const navigate = useNavigate();
    const { user } = useUser();

    const [listingTitle, setListingTitle] = useState("");
    const [listingDesc, setListingDesc] = useState("");
    const [listingPay, setListingPay] = useState("");
    const [zipcode, setZipcode] = useState("");

    const [skills, setSkills] = useState([]);
    const [selectedSkillId, setSelectedSkillId] = useState("");

    const getCoordsFromZipcode = async (zipcode) => {
        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${zipcode},+united+states&key=ee0965be84ed463a965a07366b4a7e72`);

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

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await fetch("http://localhost:8000/skill");
                const data = await response.json();
                setSkills(data);
            } catch (error) {
                console.error("Error fetching skills:", error);
            }
        };

        fetchSkills();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { lat, lng } = await getCoordsFromZipcode(zipcode)

        const rawPay = parseFloat(listingPay);
        if (isNaN(rawPay) || rawPay < 0) {
            alert("Pay must be a valid number.");
            return;
        }

        const formattedPay = parseFloat(rawPay.toFixed(2));

        if (!selectedSkillId) {
            alert("Please select a skill for the job posting.");
            return;
        }

        const listingJson = {
            title: listingTitle,
            description: listingDesc,
            latitude: lat,
            longitude: lng,
            price: formattedPay,
            poster_id: user?.user_id,
            required_skill: skills.find(skill => skill.skill_id === parseInt(selectedSkillId))?.skill_name,
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
                    Required Skill <select
                        className="input-box"
                        value={selectedSkillId}
                        onChange={(e) => setSelectedSkillId(e.target.value)}
                        required>
                        <option value="">Select a Skill</option>
                        {skills.map((skill) => (
                            <option key={skill.skill_id} value={skill.skill_id}>
                                {skill.skill_name.charAt(0).toUpperCase() + skill.skill_name.slice(1)}
                            </option>
                        ))}
                    </select>
                    Job Zipcode<input
                        className="input-box"
                        placeholder="5 Digit Zipcode"
                        type="text"
                        value={zipcode}
                        onChange={(e) => {
                            const zip = e.target.value.replace(/\D/g, ""); //digits only
                            if (zip.length <= 5) setZipcode(zip);
                        }}
                        required />
                    Job Pay<input
                        className="input-box"
                        placeholder="Pay"
                        type="text"
                        value={listingPay}
                        onChange={(e) => {
                            const input = e.target.value;
                            const sanitized = input.replace(/[^\d.]/g, "")
                            setListingPay(sanitized)
                        }}
                        required />
                    <button type="submit" className="create-button">Post job</button>
                </form>
            </div>
        </>
    )



}
