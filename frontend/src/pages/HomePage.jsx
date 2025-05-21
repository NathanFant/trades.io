import { useState, useEffect } from "react";
import "./HomePage.css";

const mockListings = [  //replace with listing logic
  {
    listing_id: 1,
    title: "Drywall Repair Needed",
    description: "Need help patching and sanding 2 walls.",
    price: 150.0,
    created_at: "2025-05-18",
  },
  {
    listing_id: 2,
    title: "Yard Cleanup Job",
    description: "Front and back yard need cleanup and hauling.",
    price: 200.0,
    created_at: "2025-05-19",
  },
];

const HomePage = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/listings")
      .then((response) => response.json())
      .then((data) => {
        setListings(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching listings:", error);
        setLoading(false);
      });
    loadMockData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleToggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleRequestJob = (id) => {
    alert(`Request sent for job ID: ${id}`);
  };

  const handleAskMore = (id) => {
    alert(`Asked for more info on job ID: ${id}`);
  };

  const filteredListings = listings.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>BCF.COM</h1>
        <div><h2>Welcome to Blue Collar Fiverr</h2></div>
        <div className="header-buttons">
          <button onClick={() => alert("Login clicked")}>Login</button>
          <button onClick={() => alert("Post Job clicked")}>Post a Job</button>
        </div>
      </header>

      <input
        type="text"
        className="search-input"
        placeholder="Search for jobs..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <div className="listings">
        {loading ? (
          <p>Loading jobs...</p>
        ) : filteredListings.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          filteredListings.map((job) => (
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
                    <button onClick={(e) => {
                      e.stopPropagation();
                      handleRequestJob(job.listing_id);
                    }}>
                      Request Job
                    </button>
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
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
