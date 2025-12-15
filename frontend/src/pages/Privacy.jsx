import Navbar from "../components/Navbar";

export default function Privacy() {
  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 px-4">
        <h1 className="text-xl font-semibold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-700 leading-6">
          This is a minimal MVP.  
          ERP is used only to avoid duplicate voting.  
          No personal data is shown publicly.  
          Images and votes are stored securely.  
          You may request removal anytime.
        </p>
      </div>
    </>
  );
}
