
export default function RequestButton({ job }) {

    async function handleRequestJob() {
        try {
            const res = await fetch("http://localhost:8000/requests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    listing_id: job?.poster_id,
                    worker_id: 1
                }),
            });

            if (!res.ok) {
            throw new Error("Failed to send job request");
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
