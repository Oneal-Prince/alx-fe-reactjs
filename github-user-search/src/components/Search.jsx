import { useState } from "react";

export default function Search({ onSearch, user, loading, error }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    onSearch(username.trim());
    setUsername("");
  };

  return (
    <div>
    
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

    
      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {user && (
        <div className="mt-6 p-4 border rounded-lg shadow bg-white">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold">{user.name || user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}