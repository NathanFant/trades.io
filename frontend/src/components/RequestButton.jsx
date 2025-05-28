
import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";

export default function RequestButton({ job }) {
    const { user } = useUser();
    const [hasRequested, setHasRequested] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkRequestStatus = async () => {
            if (!user || !job) return;

            try {
                const res = await fetch(`http://localhost:8000/requests/${user.user_id}`);
                const data = await res.json();
                const alreadyRequested = data.some(
                    (request) => request.listing_id === job.listing_id
                );
                setHasRequested(alreadyRequested);
            } catch (err) {
                console.error("Error checking request status:", err);
            } finally {
                setLoading(false);
            }
        };

        checkRequestStatus();
    }, [user, job]);



    const handleRequestJob = async () => {
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

    checkRequestStatus();
  }, [user, job]);

            alert("Job request sent!");
            setHasRequested(true);

      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.detail || "Failed to request job");
        return;
      }

      alert("Job request sent!");
      setHasRequested(true);
    } catch (err) {
      console.error("Error requesting job:", err);
    }
  };

    const handleCancelRequest = async () => {
        try {
            const res = await fetch(`http://localhost:8000/requests/${user.user_id}/${job.listing_id}`, {
                method: "DELETE",
            });

      if (!res.ok) {
        alert("Failed to cancel request");
        return;
      }

            alert("Request canceled.");
            setHasRequested(false);

        } catch (err) {
            console.error("Error cancelling request:", err);
        }
    }
    if (!user || loading) return null;


    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                setHasRequested ? handleCancelRequest() : handleRequestJob();
            }}
            style={{
                opacity: 1,
                backgroundColor: hasRequested ? "#f44336" : "#4CAF50",
                color: "white",
                padding: "8px 12px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
            }}
        >
            {hasRequested ? "Cancel Request" : "Request Job"}
        </button>
    );
}


// comment to save with
