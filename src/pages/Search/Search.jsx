// import { useEffect, useState } from 'react'
// import * as profileService from '../../services/profileService'

import SearchProfilesCard from '../../components/SearchProfilesCard/SearchProfilesCard';

const Search = ({ search, handleSearch, searchResults, handleShowProfile, user }) => {

  return (
    <main className='mt-20 flex flex-col items-center justify-center container '>
      {/* <h2>Search other users by handle or name:</h2> */}
      <form className='flex justify-center mt-1'>
        <div className='relative w-[100%] '>

          <input type="text" onChange={handleSearch} value={search} placeholder='Search' id='search' className='
                p-0 w-72 m-1 placeholder:text-sm peer border-b-2 border-gray-300 dark:border-gray-900 text-gray-900 dark:text-gray-200 focus:border-rose-600 focus:outline-none mx-auto placeholder-transparent
          dark:bg-dark-background-200/50' />

          <label htmlFor="search" className=' absolute left-[8px] -top-3 dark:text-dark-txt-100 text-xs peer-placeholder-shown:text-sm
          peer-placeholder-shown:text-gray-400
          peer-placeholder-shown:dark:gray-200
          peer-placeholder-shown:top-3
          peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-700
          peer-focus:dark:text-dark-txt-100 transition-all
          '>Search handle or name</label>
        </div>
      </form>
      {searchResults.length > 0 && (
        <div className='w-full '>
          {/* <ul> */}
          {searchResults.map((profile) => (
            // <li key={profile._id}>{profile.name}</li>
            <SearchProfilesCard profile={profile} key={profile._id} handleShowProfile={handleShowProfile} user={user} />
          ))}
          {/* </ul> */}
        </div>
      )}
    </main>
  );
}

export default Search;
