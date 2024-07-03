import { ChangeEvent, useEffect, useState } from "react";
import { User } from "../../shared/user";
import Suggestions from "./suggestion";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<string[]>([]);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users.length > 0
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }
  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users) {
        setUsers(data.users.map((user: User) => user.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      let err = "Something Went Wrong";
      if (error instanceof Error) {
        err = error.message;
      }
      setLoading(false);
      setError(err);
    }
  }
  function handleClick(suggestion: string) {
    setSearchParam(suggestion);
    setShowDropdown(false);
  }
  useEffect(() => {
    fetchListOfUsers();
  }, []);
  console.log(users);
  if (error) {
    return <h3>{error}</h3>;
  }
  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading Data</h1>
      ) : (
        <input
          value={searchParam}
          onChange={handleChange}
          name="search-users"
          placeholder="Search Users here..."
        />
      )}
      {showDropdown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
}
