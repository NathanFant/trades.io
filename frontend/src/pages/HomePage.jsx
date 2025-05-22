import { useState, useEffect } from "react";
import ListingCard from "../components/ListingCard";
import Searchbar from "../components/Searchbar";

const HomePage = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch("http://localhost:8000/listings");
        if (!res.ok) throw new Error("Failed to fetch listings");
        const data = await res.json();
        setListings(data);
      } catch (err) {
        console.error("Error fetching listings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  const filteredListings = listings.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="homepage-container">
      <Searchbar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <div className="listings">
        {loading ? (
          <p>Loading jobs...</p>
        ) : filteredListings.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          filteredListings.map((job) => (
            <ListingCard job={job} expandedId={expandedId} setExpandedId={setExpandedId} />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
