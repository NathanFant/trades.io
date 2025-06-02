import { useEffect, useState } from "react";
import bettercoffee from "../assets/ads/bettercoffee.png";
import devNRG from "../assets/ads/devNRG.png";
import gitpull from "../assets/ads/gitpull.png";
import holepatch from "../assets/ads/holepatch.png";
import sk8 from "../assets/ads/sk8.png";
import sparky from "../assets/ads/sparky.png";

const adImages = [
  bettercoffee,
  devNRG,
  gitpull,
  holepatch,
  sk8,
  sparky
];


export default function AdRotator() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (adImages.length > 0 ) {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % adImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }}, []);

  return (
    <div className="ads-container">
        <img
          src={adImages[current]}
          style={{ width: "100%", height: "100%", borderRadius: "6px" }}
        />

    </div>
  );
}
