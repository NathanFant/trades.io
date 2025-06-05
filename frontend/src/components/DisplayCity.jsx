import { useEffect, useState } from "react";

export default function DisplayCity({ job }) {

    const [location, setLocation] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    useEffect(() => {
        const fetchState = async () => {
            try {
                const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${job?.latitude}+${job?.longitude}&key=ee0965be84ed463a965a07366b4a7e72`)
                if (!res.ok || res.status === 402) {
                    setCity("Little Rock");
                    setState("AR");
                    throw new Error("Could not fetch location");
                } else {
                    const data = await res.json();
                    setLocation(data?.results[0].components);
                    setCity(data?.results[0].components.city);
                    setState(data?.results[0].components.state_code);
                }

            } catch (error) {
                console.error("Error fetching location", error);

            } finally {
                setIsLoading(false)
            }
        }
        fetchState();
    });

    return (
        <>
            {isLoading ? (
                <p><strong>Location: </strong>Loading location....</p>
            ) : (
                <p><strong>Location: </strong>{city}, {state}</p>
            )}
        </>
    )
}
