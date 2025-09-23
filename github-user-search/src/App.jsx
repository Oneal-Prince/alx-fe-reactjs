
import RepoList from "./components/RepoList";
import Search from "./components/Search";

function App() {

  return (
    <div className="max-w-2xl mx-auto p-6">
      <RepoList />
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;