import { useState, useEffect } from "react";
import ListingCard from "../components/ListingCard";
import Searchbar from "../components/Searchbar";
import { AdLeft, AdRight } from "../components/AdBanner";


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

  const handleDeleteFromParent = (id) => {
    setListings((prev) => prev.filter((job) => job.listing_id !== id))
  }

  const filteredListings = listings.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="homepage-container-with-ads">
      <AdLeft />

      <div className="homepage-main-content">


        <div className="listings">
          <Searchbar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
          {loading ? (
            <p>Loading jobs...</p>
          ) : filteredListings.length === 0 ? (
            <p>No jobs found.</p>
          ) : (
            filteredListings.map((job, index) => (
              <ListingCard
                key={index}
                job={job}
                expandedId={expandedId}
                setExpandedId={setExpandedId}
                handleDeleteFromParent={handleDeleteFromParent}
              />
            ))
          )}
        </div>
      </div>

      <AdRight />
    </div>
  );

};
export default HomePage;
