import { useEffect, useState } from 'react'
import * as profileService from '../../services/profileService'

const Search = ({user}) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (search.length === 0) return setSearchResults([]);
        const profiles = await profileService.getAllProfiles();
        const filteredResults = profiles.filter((profile) => {
          console.log('profile4: ',profile)
          console.log('user4: ',user)
          const name = profile.name.toLowerCase();
          const searchQuery = search.toLowerCase();
          return name.startsWith(searchQuery) && profile.name !== user.name;
        });
        setSearchResults(filteredResults);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSearchResults();
  }, [search, user]);

  return (
    <main>
      <h1>Search Page</h1>
      <form>
        <input type="text" onChange={handleSearch} value={search} placeholder='@harrison' />
      </form>
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((profile) => (
              <li key={profile._id}>{profile.name}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}

export default Search;
