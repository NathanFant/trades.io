import { useUser } from "../context/UserContext";


export default function RequestButton({ job }) {
    const { user } = useUser();


    async function handleRequestJob() {

        try {
            const res = await fetch("http://localhost:8000/requests", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    listing_id: job?.poster_id,
                    worker_id: user?.user_id
                }),
            });

            if (!res.ok) {
                if (res.status === 400) {
                    alert("Job already requested");
                    return
                }


            }
            alert("Job request sent to user:", job?.poster_id)

        } catch (err) {
            console.error("Error requesting job:", err);
        }
    }

    return (
        <button onClick={(e) => {
            e.stopPropagation();
            handleRequestJob();
        }}
        >Request Job</button>
    )
}
