import Skills from "../components/Skills";
import { useUser } from "../context/UserContext";
import ListingCard from "../components/ListingCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Profile() {
    //const { user } = useUser()
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

    return (
        <>
        <div>{pageUser?.username}</div>
        <Skills user_id={user_id}/>
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
