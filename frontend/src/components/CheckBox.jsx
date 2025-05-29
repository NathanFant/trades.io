import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useEffect } from "react";

export default function CheckBox({ skill, user_id }) {

    const [isChecked, setIsChecked] = useState(false);
    const [userSkills, setUserSkills] = useState([]);
    const { user } = useUser();

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await fetch(`http://localhost:8000/skill/user/${user_id}`);
                const data = await res.json();
                setUserSkills(data);
            } catch (error) {
                console.error("Error fetching user", error);
            }
        };

        fetchSkills();
    }, [user_id])

    const hasSkillByName = userSkills.some(
        (s) => s.skill_name === skill.skill_name
        );

    function handleSkillAssign(e) {
        setIsChecked(e.target.checked);

    }


    return (
        <>
            {(hasSkillByName || user.user_id === parseInt(user_id)) && <label>
                {skill.skill_name[0].toUpperCase() + skill.skill_name.slice(1)} {" "}
            </label>}
            {(user.user_id === parseInt(user_id)) &&
            <input
                key={skill.skill_id}
                type="checkbox"
                checked={isChecked}
                onChange={(e) => handleSkillAssign(e)}
            />}
        </>
    )
}
