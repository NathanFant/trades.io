import { useEffect, useState } from "react";

export default function FilterBySkill({ setFilterTerm }) {
    const [selectedSkill, setSelectedSkill] = useState("");
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await fetch(`http://localhost:8000/skill`);
                const data = await res.json();
                setSkills(data.slice(0, 11));
            } catch (error) {
                console.error("Error fetching user", error);
            }
        }
        fetchSkills();
    }, []);

    function handleSkillSelect(e) {
        let skill = e.target.value
        if (skill === "Select a Skill") {
            skill = ""
        }
        setSelectedSkill(skill)
        setFilterTerm(skill)
    }


    return (
        <div className="filter-by-skill">
            <label htmlFor="skill-select">Filter by Skill:</label>
            <select
                className="input-box"
                value={selectedSkill}
                onChange={(e) => handleSkillSelect(e)}
                required
            >
                <option value={selectedSkill.skill_name}>Select a Skill</option>
                {skills.map((skill) => (
                    <option key={skill.skill_id} value={skill.skill_name}>
                        {skill.skill_name.charAt(0).toUpperCase() + skill.skill_name.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );

}
