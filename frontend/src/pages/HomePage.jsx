import { useState, useEffect } from "react";
import ListingCard from "../components/ListingCard";
import { AdLeft, AdRight } from "../components/AdBanner";
import SearchFilterBar from "../components/SearchFilterBar";



const HomePage = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [filterTerm, setFilterTerm] = useState("");

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

  const filteredListingsBySkill = filteredListings.filter((skill) =>
    skill.required_skill.includes(filterTerm)
  );


  return (
    <div className="homepage-container-with-ads">
      <AdLeft />
      <div className="homepage-main-content">
        <div className="listings">
          <SearchFilterBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setFilterTerm={setFilterTerm}
          />
          {loading ? (
            <p>Loading jobs...</p>
          ) : filteredListings.length === 0 ? (
            <p>No jobs found.</p>
          ) : (
            filteredListingsBySkill.map((job, index) => (
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
