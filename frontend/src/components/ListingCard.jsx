import RequestButton from "./RequestButton";

export default function ListingCard({ job, expandedId, setExpandedId }) {

    const handleToggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const handleAskMore = (id) => {
        alert(`Asked for more info on job ID: ${id}`);
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
                    <RequestButton job={job} />
                    <button onClick={(e) => {
                      e.stopPropagation();
                      handleAskMore(job.listing_id);
                    }}>
                      Ask More
                    </button>
                  </div>
                </div>
              )}
            </div>

        </>
    )


}
