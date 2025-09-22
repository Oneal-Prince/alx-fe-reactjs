import { useState } from "react";

export default function Search({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return; 
    onSearch(username.trim());
    setUsername(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
       
      />
      <button
        type="submit"
      >
        Search
      </button>
    </form>
  );
}