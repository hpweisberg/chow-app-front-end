// import { useState } from 'react'
import { useLoadScript } from "@react-google-maps/api";

// css
import PostList from '../PostList/PostList'
import PostIconNav from '../../components/PostIconNav/PostIconNav'
import MealCard from '../../components/MealCard/MealCard'
import Map from '../../components/Map/Map'
import Loading from "../Loading/Loading";
import { NavLink } from 'react-router-dom'
NavLink

// import { GoogleMap, useLoadScript, Marker, } from "@react-google-maps/api"



const Landing = ({ user, posts, handleSort, activeSort, profile, filteredPosts }) => {
  // console.log('second time:: ',logedInUser)
  // const mealCategories = ['Breakfast', 'Lunch', 'Dinner', 'Brunch', 'Snack', 'Drink', 'Dessert', 'Other'];
console.log('filteredPosts: ', filteredPosts)

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDHxO2cQAXBHkIJ0P9Augy9SmBiI-iat1o',
    libraries: ["places"],
  })


  return (
    <main className=''>
      {user && (
        <div className='flex flex-col justify-center border'>
          <div className='w-full mt-14'>
            <PostIconNav handleSort={handleSort} />
          </div>
          {activeSort === 'rows' && <PostList profile={profile} posts={posts} />}
          {activeSort === 'meals' && (
            <>
              <MealCard posts={posts} />
            </>
          )}
          {activeSort === 'map' && isLoaded && <Map posts={posts}/>}
          {activeSort === 'map' && !isLoaded && <Loading />}
        </div>
      )}
    </main>
  );
};


export default Landing
