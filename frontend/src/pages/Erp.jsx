import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ERP() {
  const [erp, setErp] = useState("");
  const navigate = useNavigate();

  function handleContinue() {
    if (!erp) return alert("Enter ERP");
    localStorage.setItem("erp", erp);
    navigate("/year");
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-xl font-semibold mb-4">Enter your ERP</h1>

      <input 
        className="border w-64 px-3 py-2 rounded mb-4"
        placeholder="2123XXXX"
        value={erp}
        onChange={(e) => setErp(e.target.value)}
      />

      <button 
        className="bg-black text-white px-6 py-2 rounded"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
}
