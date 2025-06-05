import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useEffect } from "react";

export default function CheckBox({ skill, user_id=9999999 }) {

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
        (s) => s?.skill_name === skill?.skill_name
        );

    useEffect(() => {
        setIsChecked(hasSkillByName);
    }, [userSkills]);

    async function handleSkillAssign() {
        setIsChecked(!isChecked);
        if (!isChecked) {
            const addSkill = async () => {
                const skillCreate = {
                    user_id: user?.user_id ,
                    skill_id: skill?.skill_id,
                };
                try {
                    await fetch(`http://localhost:8000/skill`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json"},
                        body: JSON.stringify(skillCreate)
                    });
                    // alert(`You have added ${skill?.skill_name} to your skills`);
                } catch (error) {
                    console.error("Error adding new skill", error);
                }
            }
            addSkill();
        } else {
            const removeSkill = async () => {
                const skillDelete = {
                    user_id: user?.user_id ,
                    skill_id: skill?.skill_id,
                }
                try {
                    await fetch(`http://localhost:8000/skill`, {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json"},
                        body: JSON.stringify(skillDelete),
                    });
                    // alert(`You have remove ${skill?.skill_name} from your skills`)
                } catch (error) {
                    console.error("Error removing skill", error);
                }
            }
            removeSkill();
        }

    }

    return (
            <>
                {(hasSkillByName || user?.user_id === parseInt(user_id)) && (
                    <div
                    className={"skillPill" + (isChecked ? " skillPill-checked" : "")}
                    onClick={user?.user_id === parseInt(user_id) ? () => handleSkillAssign() : undefined}
                    >
                        <label style={user?.user_id === parseInt(user_id) ? {cursor: "pointer"} : {cursor: "default"}} >
                            {skill.skill_name[0].toUpperCase() + skill.skill_name.slice(1)}
                        </label>
                    </div>
                )}

            </>
    )
}
