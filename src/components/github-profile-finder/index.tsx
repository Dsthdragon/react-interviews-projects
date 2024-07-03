import { useEffect, useState } from "react";
import User, { GithubData } from "./user";
import "./style.css";
export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("Dsthdragon");
  const [userData, setUserData] = useState<GithubData | null>(null);
  const [loading, setLoading] = useState(false);
  async function fetchGithubUserData() {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();
      if (data) {
        setUserData(data);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) return <h1>Loading Data</h1>;
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="search Github Username ..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData && <User user={userData} />}
    </div>
  );
}
