import { useState } from "react";
import Navbar from "../components/Navbar";

// Dummy data — replace with backend later
const samplePhotos = [
  { id: 1, url: "/p1.jpg" },
  { id: 2, url: "/p2.jpg" },
  { id: 3, url: "/p3.jpg" },
  { id: 4, url: "/p4.jpg" }
];

export default function Rating() {
  const [pair, setPair] = useState(getRandomPair());

  function getRandomPair() {
    const shuffled = [...samplePhotos].sort(() => Math.random() - 0.5);
    return [shuffled[0], shuffled[1]];
  }

  function handleSelect(winner) {
    // TODO: send vote to backend here
    setPair(getRandomPair());
  }

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10 px-4 text-center">
        
        <div className="flex justify-between gap-4">
          
          <div className="flex-1">
            <img src={pair[0].url} className="w-full h-80 object-cover rounded mb-4" />
            <button
              className="w-full bg-black text-white py-2 rounded"
              onClick={() => handleSelect(pair[0].id)}
            >
              Select A
            </button>
          </div>

          <div className="flex-1">
            <img src={pair[1].url} className="w-full h-80 object-cover rounded mb-4" />
            <button
              className="w-full bg-black text-white py-2 rounded"
              onClick={() => handleSelect(pair[1].id)}
            >
              Select B
            </button>
          </div>

        </div>

      </div>
    </>
  );
}
