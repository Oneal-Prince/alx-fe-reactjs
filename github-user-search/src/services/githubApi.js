const API_URL = import.meta.env.VITE_APP_API_URL;
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function fetchRepos(username) {
  const headers = API_KEY
    ? { Authorization: `token ${API_KEY}` } // only add auth if key exists
    : {};

  const res = await fetch(`${API_URL}/users/${username}/repos`, { headers });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`GitHub API error (${res.status}): ${errText}`);
  }

  return res.json();
}