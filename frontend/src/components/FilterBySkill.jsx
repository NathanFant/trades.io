import { useEffect, useState } from "react";

export default function FilterBySkill({ skills, onFilterChange }) {
    const [selectedSkill, setSelectedSkill] = useState("");

    useEffect(() => {
        onFilterChange(selectedSkill);
    }, [selectedSkill, onFilterChange]);

    const handleSkillChange = (event) => {
        setSelectedSkill(event.target.value);
    }

    return (
        <div className="filter-by-skill">
            <label htmlFor="skill-select">Filter by Skill:</label>
            <select
                id="skill-select"
                value={selectedSkill}
                onChange={handleSkillChange}
            >
                <option value="">All Skills</option>
                {skills.map((skill) => (
                    <option key={skill} value={skill}>
                        {skill}
                    </option>
                ))}
            </select>
        </div>
    );

}
