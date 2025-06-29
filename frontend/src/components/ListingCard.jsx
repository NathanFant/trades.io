import { useState } from "react";
import { useUser } from "../context/UserContext";
import RequestButton from "./RequestButton";
import AskMoreModal from "./AskMoreModal";
import RequestJobModal from "./RequestJobModal";
import CancelJobModal from "./CancelJobModal";
import DisplayCity from "./DisplayCity";

export default function ListingCard({ job, expandedId, setExpandedId, handleDeleteFromParent }) {
  const [showAskModal, setShowAskModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [hasRequested, setHasRequested] = useState(false);
  const { user } = useUser();
  const isPoster = user && job.poster_id === user.user_id;

  const handleToggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleAskMore = () => {
    setShowAskModal(true);
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this listing?")) return;

    try {
      const res = await fetch(`http://localhost:8000/listings/${job.listing_id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        handleDeleteFromParent(job.listing_id);
      } else {
        alert("Failed to delete listing.");
      }
    } catch (err) {
      console.error("Delete failed", err);
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

        {user && user.is_admin && (
          <button
            className="admin-delete-button delete-button"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
          >
            Admin Delete
          </button>
        )}

        <p>
          {expandedId === job.listing_id ?  "" : job.description.length > 200 ? `${job.description.slice(0, 85)}...` : job.description}
        </p>

        {expandedId === job.listing_id && (
          <div className="job-details">
            <p><strong>Full Description:</strong> {job.description}</p>
            <p><strong>Price:</strong> ${job.price.toFixed(2)}</p>
            <DisplayCity job={job} />
            <p><strong>Posted:</strong> {job.created_at}</p>

            <div className="job-buttons">
              {!isPoster && (
                <>
                  <RequestButton
                    job={job}
                    onOpenModal={() => setShowRequestModal(true)}
                    hasRequested={hasRequested}
                    setHasRequested={setHasRequested}
                  />

                </>
              )}

              {showRequestModal && (
                <RequestJobModal
                  job={job}
                  onClose={() => setShowRequestModal(false)}
                  setHasRequested={setHasRequested}
                />
              )}

              {!isPoster && user && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAskMore(job.listing_id);
                  }}
                >
                  Ask More
                </button>
              )}

              {isPoster && (
                <button
                  className="delete-button"
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

      {showAskModal && (
        <AskMoreModal
          job={job}
          onClose={() => setShowAskModal(false)}
        />
      )}

      {showCancelModal && (
        <CancelJobModal
          job={job}
          onClose={() => setShowCancelModal(false)}
          setHasRequested={setHasRequested}
        />
      )}
    </>
  );
}
