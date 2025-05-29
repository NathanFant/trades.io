import { useEffect, useState } from "react";
import CheckBox from "./CheckBox";

export default function Skills() {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await fetch("http://localhost:8000/skill");
                const data = await res.json();
                setSkills(data);
            } catch (error) {
                console.error("Error fetching user", error);
            }
        };

        fetchSkills();
    }, [])

    return (
        <>
            {skills.map((skill, index) => (
                <CheckBox key={index} skill={skill} />
            ))}

        </>
    )
}
