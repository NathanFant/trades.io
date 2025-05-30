import RequestButton from "./RequestButton";
import AskMoreModal from "./AskMoreModal";
import { useState } from "react";
import { useUser } from "../context/UserContext";


export default function ListingCard({ job, expandedId, setExpandedId }) {
  const [showModal, setShowModal] = useState(false);
  const { user } = useUser();
  const isPoster = user && job.poster_id === user.user_id



  const handleToggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleAskMore = () => {
    setShowModal(true);
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this listing?")) return;

    try {
      const res = await fetch(`http://localhost:8000/listings/${job.listing_id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Listing deleted.");
        window.location.reload();
      } else {
        alert("Failed to delete listing.");
      }
    } catch (err) {
      console.error("Delete failed", err);
      alert("Error deleting listing.");
    }
  };

  return (
    <>
      <div
        className={`job-card ${expandedId === job.listing_id ? "expanded" : ""}`}
        key={job.listing_id}
        onClick={() => handleToggleExpand(job.listing_id)}
      >
        <div className="job-header">
          <h2>{job.title}</h2>
          <span className="job-price">${job.price.toFixed(2)}</span>
        </div>
        <p>{job.description}</p>
          {expandedId === job.listing_id && (
            <div className="job-details">
              <p><strong>Full Description:</strong> {job.description}</p>
              <p><strong>Price:</strong> ${job.price.toFixed(2)}</p>
              <p><strong>Posted:</strong> {job.created_at}</p>
              <div className="job-buttons">
                {!isPoster && <RequestButton job={job} />}
                {!isPoster && user && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAskMore(job.listing_id);
                    }}
                  > Ask More </button>
                )}
                {isPoster && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete();
                  }}
                  style={{ color: "red", marginTop: "8px" }}
                >
                  Delete Post
                </button>
              )}

              </div>
            </div>
          )}
      </div>
      {showModal && (
        <AskMoreModal
          job={job}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}
