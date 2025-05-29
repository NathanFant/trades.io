import { useState } from "react";

export default function CheckBox({ skill }) {

    const [isChecked, setIsChecked] = useState(false);


    function handleSkillAssign(e) {
        setIsChecked(e.target.checked);

    }


    return (
        <>
            <label>
                {skill.skill_name[0].toUpperCase() + skill.skill_name.slice(1)}: {" "}
            </label>
            <input
                key={skill.skill_id}
                type="checkbox"
                checked={isChecked}
                onChange={(e) => handleSkillAssign(e)}
            />
        </>
    )
}
