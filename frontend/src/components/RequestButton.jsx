import { useUser } from "../context/UserContext";
import { useState, useEffect } from "react";

export default function RequestButton({ job }) {
    const { user } = useUser();
    const [requested, setRequested] = useState(false);

    useEffect(() => {
        if (!user) return;
        const key = `requested_${user.user_id}_${job.listing_id}`;
        if (localStorage.getItem(key)) {
            setRequested(true);
        }
    }, [user, job.listing_id]);

    async function handleRequestJob() {
        try {
            const res = await fetch("http://localhost:8000/requests", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    listing_id: job?.listing_id,
                    worker_id: user?.user_id,
                }),
            });

            if (!res.ok) {
                if (res.status === 400) {
                    alert("Job already requested");
                    setRequested(true);
                    localStorage.setItem(`requested_${user.user_id}_${job.listing_id}`, "true");
                    return;
                }
            }

            alert("Job request sent!");
            setRequested(true);
            localStorage.setItem(`requested_${user.user_id}_${job.listing_id}`, "true");

        } catch (err) {
            console.error("Error requesting job:", err);
        }
    }

    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                handleRequestJob();
            }}
            disabled={requested}
            style={{
                opacity: requested ? 0.5 : 1,
                cursor: requested ? "not-allowed" : "pointer"
            }}
        >
            {requested ? "Requested" : "Request Job"}
        </button>
    );
}
