// import { useEffect, useState } from 'react'
// import * as profileService from '../../services/profileService'

import SearchProfilesCard from '../../components/SearchProfilesCard/SearchProfilesCard';

const Search = ({search, handleSearch, searchResults, handleShowProfile, user}) => {
  
  return (
    <main className='mt-20'>
      <h2>Search other users by handle or name:</h2>
      <form className='flex justify-center'>
        <input type="text" onChange={handleSearch} value={search} placeholder='Search' className='placeholder:flex placeholder:justify-center m-0' />
      </form>
      {searchResults.length > 0 && (
        <div>
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
