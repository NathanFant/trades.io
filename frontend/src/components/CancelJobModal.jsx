import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useUser } from "../context/UserContext";

export default function CancelJobModal({ job, onClose, setHasRequested }) {
  const { user } = useUser();
  const [status, setStatus] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleCancel = async () => {
    setIsSent(true);
    try {

      const res = await fetch(`http://localhost:8000/requests/${user.user_id}/${job.listing_id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to cancel request");


      const posterRes = await fetch(`http://localhost:8000/users/${job.poster_id}`);
      const poster = await posterRes.json();


      const templateParams = {
        from_name: user.username,
        from_email: user.email,
        user_name: poster.username,
        to_email: poster.email,
        job_title: job.title,
        message: `${user.username} has canceled their request for your job listing: "${job.title}".`,
      };

      await emailjs.send(
        "service_kvgndg9",
        "template_d10y01f",
        templateParams,
        "Hl0FaIDHp18wzNXqC"
      );

      setStatus("Request cancelled and email sent.");
      setIsSent(true);
      setHasRequested(false);

      setTimeout(onClose, 2000);
    } catch (err) {
      console.error("Cancellation failed", err);
      setStatus("Failed to cancel or send email.");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Cancel Request for {job.title}?</h3>
        <p>This will notify the job poster via email.</p>
        <button onClick={handleCancel} disabled={isSent} style={{ marginRight: "1rem" }}>
          Yes, Cancel
        </button>
        <button onClick={onClose} disabled={isSent} style={{
          cursor: isSent ? "not-allowed" : "pointer" }}>Go Back</button>
        <p>{status}</p>
      </div>
    </div>
  );
}
