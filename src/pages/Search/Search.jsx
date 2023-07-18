// import { useEffect, useState } from 'react'
// import * as profileService from '../../services/profileService'

import SearchProfilesCard from '../../components/SearchProfilesCard/SearchProfilesCard';

const Search = ({search, handleSearch, searchResults, handleShowProfile, user}) => {
  
  return (
    <main className='mt-20'>
      <form className='flex justify-center'>
        <input type="text" onChange={handleSearch} value={search} placeholder='Search' className='placeholder:flex placeholder:justify-center' />
      </form>
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((profile) => (
              // <li key={profile._id}>{profile.name}</li>
              <SearchProfilesCard profile={profile} key={profile._id} handleShowProfile={handleShowProfile} user={user}/>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}

export default Search;
