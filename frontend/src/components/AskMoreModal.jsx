import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useUser } from "../context/UserContext";

export default function AskMoreModal({ job, onClose }) {
  const { user } = useUser();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = async () => {
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
        "service_vul2dde",      // Replace with your EmailJS service ID
        "template_djjqdxm",     // Replace with your EmailJS template ID
        templateParams,
        "zba6T16xnJE2l6KWW"       // Replace with your EmailJS public key
      );

      setStatus("Message sent!");
      setTimeout(onClose, 2000);
    } catch (err) {
      console.error("Email send failed", err);
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Send a message to {job.title} poster</h3>
        <textarea
          rows="5"
          placeholder="Write your question here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendEmail}>Send</button>
        <button onClick={onClose}>Cancel</button>
        <p>{status}</p>
      </div>
    </div>
  );
}
