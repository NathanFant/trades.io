const handleRequestJob = async (listingId) => {
    const jobRequestData = {
      listing_id: listingId,
      worker_id: 1
    };

    try {
      const res = await fetch("http://localhost:8000/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobRequestData),
      });

      if (!res.ok) {
        throw new Error("Failed to send job request");
      }

      const result = await res.json();
      console.log("Job request successful:", result);
      alert(`Job request sent successfully for job ID: ${listingId}`);
    } catch (err) {
      console.error("Error requesting job:", err);
      alert(`Failed to request job ID: ${listingId}`);
    }
  };
