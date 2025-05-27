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

 const adMessages = [
  "Hire skilled local workers today!",
  "Post your job and get matched fast!",
  "Need help? Find pros nearby!",
];

const AdRotator = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % adMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ads-container">
      <p>{adMessages[current]}</p>
    </div>
  );
};


  const filteredListings = listings.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

 return (
  <div className="homepage-container-with-ads">
    <div className="ads-left">
      <AdRotator />
    </div>

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
            />
          ))
        )}
      </div>
    </div>

    <div className="ads-right">
      <AdRotator />
    </div>
  </div>
);

};
export default HomePage;
