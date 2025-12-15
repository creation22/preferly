import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function ChooseYear() {
  const navigate = useNavigate();
  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 px-4">
        <h1 className="text-xl font-semibold mb-6 text-center">Choose your year</h1>

        {years.map((yr, i) => (
          <button
            key={i}
            className="w-full border bg-gray-100 px-4 py-3 rounded mb-3"
            onClick={() => {
              localStorage.setItem("year", i + 1);
              navigate("/side");
            }}
          >
            {yr}
          </button>
        ))}
      </div>
    </>
  );
}
