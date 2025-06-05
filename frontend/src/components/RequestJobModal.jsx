import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useUser } from "../context/UserContext";

export default function RequestJobModal({ job, onClose, setHasRequested }) {
  const { user } = useUser();
  const [message, setMessage] = useState("Hello, is this still available?");
  const [status, setStatus] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [sendClicked, setSendClicked] = useState(false);

  const sendEmail = async () => {
    setSendClicked(true);
    try {
      // Fetch poster email
      const res = await fetch(`http://localhost:8000/users/${job.poster_id}`);
      const poster = await res.json();

      const templateParams = {
        from_name: user.username,
        from_email: user.email,
        to_name: poster.username,
        to_email: poster.email,
        job_title: job.title,
        message,
      };

      await emailjs.send(
        "service_vul2dde",
        "template_gbo8rtp",
        templateParams,
        "zba6T16xnJE2l6KWW"
      );

      const requestData = await fetch("http://localhost:8000/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          listing_id: job.listing_id,
          worker_id: user.user_id,
        }),
      });

      if (!requestData.ok) {
        throw new Error("Failed to create request");
      }

      setHasRequested(true);
      setStatus("Message sent!");
      setIsSent(true);
      setTimeout(onClose, 2000);
    } catch (err) {
      console.error("Email send failed", err);
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Request Job: {job.title}</h3>
        <textarea
          className="textarea-box"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendEmail} disabled={isSent} style={{marginRight: "1rem"}} >Send</button>
        <button onClick={onClose} disabled={sendClicked} style={{
          cursor: sendClicked ? "not-allowed" : "pointer"
        }}>Cancel</button>
        <p>{status}</p>
      </div>
    </div>
  );
}
