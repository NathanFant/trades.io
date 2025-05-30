import Skills from "../components/Skills";
import ListingCard from "../components/ListingCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import NotFound from "./NotFound";

export default function Profile() {
    const [listings, setListings] = useState([]);
    const [expandedId, setExpandedId] = useState(null);
    const [pageUser, setPageUser] = useState("");
    const { user_id } = useParams();

    useEffect(() => {
        const fetchListings = async () => {
          try {
            const res = await fetch(`http://localhost:8000/users/${user_id}/listings`);
            if (!res.ok) throw new Error("Failed to fetch listings");
            const data = await res.json();
            setListings(data);
          } catch (err) {
            console.error("Error fetching listings:", err);
          }
        };

        const fetchUsername = async () => {
            try {
                const res = await fetch(`http://localhost:8000/users/${user_id}`)
                if (!res.ok) throw new Error("Failed to fetch user");
                const data = await res.json();
                setPageUser(data);
            } catch (error) {
                console.error("Error fetching users", error)
            }
        };

        fetchUsername();
        fetchListings();
    }, [user_id]);

    if (!pageUser) {
        return <NotFound />
    }

   return (
    <div>
      <h1 style={{ marginBottom: "0.5rem", textAlign: "center" }}>{pageUser?.username}'s Profile</h1>
      <Skills user_id={user_id} />
      <hr style={{ width: "100%", margin: "1.5rem 0" }} />
        <h2 style={{ textAlign: "center" }}>Job Listings</h2>
      <div className="listings">
        {listings.length === 0 ? (
          <p>No job listings yet.</p>
        ) : (
          listings.map((job, index) => (
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
  );
}
