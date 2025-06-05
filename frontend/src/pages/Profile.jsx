import Skills from "../components/Skills";
import ListingCard from "../components/ListingCard";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { AdLeft, AdRight } from "../components/AdBanner";
import { useUser } from "../context/UserContext";

export default function Profile() {
  const { user } = useUser();
  const { user_id } = useParams();
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);
  const [requestedListings, setRequestedListings] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [pageUser, setPageUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch(`http://localhost:8000/users/${user_id}/listings`);
        if (!res.ok) throw new Error("Failed to fetch listings");
        const data = await res.json();
        setListings(data);
      } catch (err) {
        console.error("Error fetching listings:", err);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchRequests = async () => {
      try {
        const res = await fetch(`http://localhost:8000/requests/worker/${user_id}`);
        if (!res.ok) throw new Error("Failed to fetch requests");
        const data = await res.json();
        return data;
      } catch (err) {
        console.error("Error fetching requests:", err);
        return [];
      }
    };

    const fetchListingById = async (id) => {
      try {
        const res = await fetch(`http://localhost:8000/listings/${id}`);
        if (!res.ok) throw new Error("Failed to fetch listing");
        return await res.json();
      } catch (err) {
        console.error("Error fetching listing ID:", id, err);
        return null;
      }
    };

    const fetchRequestedListings = async () => {
      const requests = await fetchRequests();
      const listings = await Promise.all(
        requests.map((r) => fetchListingById(r.listing_id))
      );
      setRequestedListings(listings.filter((l) => l !== null));
    };

    const fetchUsername = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`http://localhost:8000/users/${user_id}`);
        if (!res.ok) {
          navigate("/404");
          return;
        }
        const data = await res.json();
        setPageUser(data);
      } catch (error) {
        console.error("Error fetching user", error);
      }
    };

    fetchUsername();
    fetchListings();

    if (user?.user_id === parseInt(user_id)) {
      fetchRequestedListings();
    }

  }, [user_id, user]);

  const handleDeleteFromParent = (id) => {
    setListings((prev) => prev.filter((job) => job.listing_id !== id))
  }

  if (isLoading) {
    return <h2 style={{ color: "white", textAlign: "center" }}>Loading...</h2>;
  }

  if (!pageUser && isLoading) {
    return <NotFound />;
  }

  return (
    <div className="homepage-container-with-ads">
      <AdLeft />
      <div className="homepage-main-content">
        <h1 style={{ marginBottom: "0.5rem", textAlign: "center", color: "white" }}>
          {pageUser?.username}'s Profile
        </h1>
        <Skills user_id={user_id} />
        <hr style={{ width: "100%", margin: "1.5rem 0" }} />
        <h2 style={{ textAlign: "center", color: "white" }}>Job Listings</h2>
        <div className="listings">
          {listings.length === 0 ? (
            <p style={{color:'white'}}>No job listings yet.</p>
          ) : (
            listings.map((job, index) => (
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

        {user?.user_id === parseInt(user_id) && (
          <>
            <hr style={{ width: "100%", margin: "1.5rem 0" }} />
            <h2 style={{ color: "white" }}>Jobs You've Requested</h2>
            <div className="listings">
              {requestedListings.length === 0 ? (
                <p style={{color: "white"}}>No requested jobs yet.</p>
              ) : (
                requestedListings.map((job, index) => (
                  <ListingCard
                    key={index}
                    job={job}
                    expandedId={expandedId}
                    setExpandedId={setExpandedId}
                  />
                ))
              )}
            </div>
          </>
        )}
      </div>
      <AdRight />
    </div>
  );
}
