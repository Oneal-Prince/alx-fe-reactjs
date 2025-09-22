import { useEffect, useState } from "react";
import { fetchRepos } from "../services/githubApi";

export default function RepoList({ username }) {
  const [repos, setRepos] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetchRepos(username)
      .then(setRepos)
      .catch(e => setErr(e.message));
  }, [username]);

  if (err) return <div>Error: {err}</div>;
  return (
    <ul>
      {repos.map(r => <li key={r.id}>{r.name}</li>)}
    </ul>
  );
}