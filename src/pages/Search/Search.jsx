import { useEffect, useState } from 'react'
import * as profileService from '../../services/profileService'

import SearchProfilesCard from '../../components/SearchProfilesCard/SearchProfilesCard';

const Search = ({search, handleSearch, searchResults}) => {
  
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
              // <li key={profile._id}>{profile.name}</li>
              <SearchProfilesCard profile={profile} key={profile._id} />
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}

export default Search;
