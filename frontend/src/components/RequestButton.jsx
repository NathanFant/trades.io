import { useUser } from "../context/UserContext";
import { useState, useEffect } from "react";

export default function RequestButton({ job }) {
    const { user } = useUser();
    const [requested, setRequested] = useState(false);

    const key = `requested_${user?.user_id}_${job?.listing_id}`;

    useEffect(() => {
        if (!user || !job) return;
        if (localStorage.getItem(key)) {
            setRequested(true);
        }
    }, [user, job]);

    async function handleRequestJob() {
        try {
            const res = await fetch("http://localhost:8000/requests", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    listing_id: job.listing_id,
                    worker_id: user.user_id,
                }),
            });

            if (!res.ok) {
                if (res.status === 400) {
                    alert("Job already requested");
                } else {
                    alert("Failed to request job");
                }
                return;
            }

            alert("Job request sent!");
            setRequested(true);
            localStorage.setItem(key, "true");

        } catch (err) {
            console.error("Error requesting job:", err);
        }
    }

    async function handleCancelRequest() {
        try {
            const res = await fetch(`http://localhost:8000/requests/${user.user_id}/${job.listing_id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                alert("Failed to cancel request");
                return;
            }

            alert("Request canceled.");
            setRequested(false);
            localStorage.removeItem(key);

        } catch (err) {
            console.error("Error cancelling request:", err);
        }
    }

    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                requested ? handleCancelRequest() : handleRequestJob();
            }}
            style={{
                opacity: 1,
                backgroundColor: requested ? "#f44336" : "#4CAF50",
                color: "white",
                padding: "8px 12px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
            }}
        >
            {requested ? "Cancel Request" : "Request Job"}
        </button>
    );
}
