import Navbar from "../components/Navbar";

export default function Leaderboard() {
  // dummy leaderboard
  const data = [
    { id: 1, url: "/p1.jpg", score: 1620 },
    { id: 2, url: "/p2.jpg", score: 1580 },
    { id: 3, url: "/p3.jpg", score: 1550 }
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 px-4">
        <h1 className="text-xl font-semibold mb-6">Leaderboard</h1>

        {data.map((p, i) => (
          <div key={i} className="flex items-center gap-4 border-b py-3">
            <span className="font-bold w-6">{i + 1}.</span>
            <img src={p.url} className="w-12 h-12 object-cover rounded" />
            <span className="ml-auto">{p.score}</span>
          </div>
        ))}
      </div>
    </>
  );
}
