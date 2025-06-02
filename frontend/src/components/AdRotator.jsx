import { useEffect, useState } from "react";

const adMessages = [
  "Hire skilled local workers today!",
  "Post your job and get matched fast!",
  "Need help? Find pros nearby!",
];

export default function AdRotator() {
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
}
