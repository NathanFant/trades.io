import Skills from "../components/Skills";
import { useUser } from "../context/UserContext";
import ListingCard from "../components/ListingCard";
import { useEffect, useState } from "react";

export default function Profile() {
    const { user } = useUser()
    const [listings, setListings] = useState([]);
    const [expandedId, setExpandedId] = useState(null);

    useEffect(() => {
        const fetchListings = async () => {
          try {
            const res = await fetch(`http://localhost:8000/users/${user?.user_id}/listings`);
            if (!res.ok) throw new Error("Failed to fetch listings");
            const data = await res.json();
            setListings(data);
          } catch (err) {
            console.error("Error fetching listings:", err);
          }
        };

        fetchListings();
    }, [user?.user_id]);

    return (
        <>
        <div>{user?.username}</div>
        <Skills />
        {listings.map((job, index) => (
            <ListingCard
                key={index}
                job={job}
                expandedId={expandedId}
                setExpandedId={setExpandedId}
            />
        ))}


        </>



    )
}
