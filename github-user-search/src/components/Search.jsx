
import { useState } from "react";
import { searchUsers } from "../services/githubService";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setResults([]);
    setPage(1);

    try {
      const data = await searchUsers(`${query}&page=1&per_page=5`);
      setResults(data);
      setHasMore(data.length === 5); 
    } catch {
      setError("Looks like we cant find the user(s)");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    try {
      const data = await searchUsers(`${query}&page=${nextPage}&per_page=5`);
      setResults((prev) => [...prev, ...data]);
      setPage(nextPage);
      setHasMore(data.length === 5);
    } catch {
      setError("Failed to load more users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter GitHub search query (e.g. location:rwanda repos:>5)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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

      
      {results.length > 0 && (
        <ul className="mt-6 space-y-4">
          {results.map((user) => (
            <li
              key={user.id}
              className="p-4 border rounded-lg shadow bg-white flex items-center gap-4"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">{user.login}</h2>
                
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}

    
      {hasMore && !loading && (
        <button
          onClick={loadMore}
          className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Load More
        </button>
      )}
    </div>
  );
}