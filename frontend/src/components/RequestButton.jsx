import { useUser } from "../context/UserContext";
import { useState, useEffect } from "react";

export default function RequestButton({ job }) {
    const { user } = useUser();
    const [requested, setRequested] = useState(false);
    const key = `requested_${user?.user_id}_${job.listing_id}`;

    useEffect(() => {
        if (!user) return;
        const isRequested = localStorage.getItem(key);
        setRequested(!!isRequested);
        }, [user, job.listing_id]);

        async function handleRequestToggle() {
            if (!user) return;

            const url = "http://localhost:8000/requests";

            try {
                const res = await fetch(url, {
                    method: requested ? "DELETE" : "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        listing_id: job?.listing_id,
                        worker_id: user?.user_id,
                    }),
                });

                if (!res.ok) {
                    if (!requested && res.status === 400) {
                        alert("Job already requested");
                        setRequested(true);
                        localStorage.setItem(key, "true");
                        return;
                    }
                    throw new Error("Failed to toggle request");
                }

                if (requested) {
                    alert("Job request canceled");
                    setRequested(false);
                    localStorage.removeItem(key);
                } else {
                    alert("Job requested!");
                    setRequested(true);
                    localStorage.setItem(key, "true");
                }
            } catch (err) {
                console.error("Error toggling job request:", err);
            }
        }



        //async function handleRequestJob() {
        //if (!user || cancelled) return;
        //if (!requested && !cancelled) {
        //    alert("Job request cancelled");
        //    setRequested(false);
         ///   setCancelled(true);
        //    localStorage.removeItem(`requested_${user.user_id}_${job.listing_id}`)
         //   return;
       // }

    // async function handleRequestJob() {

    //     try {
    //         const res = await fetch("http://localhost:8000/requests", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 listing_id: job?.listing_id,
    //                 worker_id: user?.user_id,
    //             }),
    //         });

    //         if (!res.ok) {
    //             if (res.status === 400) {
    //                 alert("Job already requested");
    //                 setRequested(true);
    //                 localStorage.setItem(`requested_${user.user_id}_${job.listing_id}`, "true");
    //                 return;
    //             }
    //         }

    //         alert("Job request sent!");
    //         setRequested(true);
    //         localStorage.setItem(`requested_${user.user_id}_${job.listing_id}`, "true");

    //     } catch (err) {
    //         console.error("Error requesting job:", err);
    //     }
    // }

    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                handleRequestToggle();
            }}
            style={{
                opacity: requested ? 0.5 : 1,
                cursor: requested ? "not-allowed" : "pointer"
            }}
        >
            {requested ? "Requested" : "Request Job"}
        </button>
    );
}
