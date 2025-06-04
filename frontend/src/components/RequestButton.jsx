import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";

export default function RequestButton({ job, onOpenModal, hasRequested, setHasRequested }) {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const checkRequestStatus = async () => {
      if (!user || !job) return;

      try {
        const res = await fetch(`http://localhost:8000/requests/worker/${user.user_id}`);
        const data = await res.json();
        const alreadyRequested = data.some(
          (req) => req.listing_id === job.listing_id
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

  const handleCancelRequest = async () => {
    try {
      const res = await fetch(`http://localhost:8000/requests/${user.user_id}/${job.listing_id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        return;
      }

      // alert("Request canceled.");
      setHasRequested(false);
    } catch (err) {
      console.error("Error cancelling request:", err);
    }
  };

  if (!user || loading) return null;

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        if (hasRequested) {
          handleCancelRequest();
        } else {
          onOpenModal(job);
        }
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
