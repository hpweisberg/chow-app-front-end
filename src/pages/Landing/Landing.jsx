// import { useState } from 'react'
import { useLoadScript } from "@react-google-maps/api";

// css
import PostList from '../PostList/PostList'
import PostIconNav from '../../components/PostIconNav/PostIconNav'
import MealCard from '../../components/MealCard/MealCard'
import Map from '../../components/Map/Map'
import Loading from "../Loading/Loading";
import { NavLink } from 'react-router-dom'
import Splash from "../Splash/Splash";
import NoFollowingScreen from "../../components/NoFollowingScreen/NoFollowingScreen";
import { useEffect } from "react";

// import { GoogleMap, useLoadScript, Marker, } from "@react-google-maps/api"



const Landing = ({ user, posts, handleSort, activeSort, profile, handleShowProfile, handleAuthEvt, darkEnabled, userProfile }) => {

  console.log(userProfile)
  if (userProfile?.following.length === 0) {
    return <NoFollowingScreen />
  }

  return (
    <div>
      {user ? (
        <main className='container flex flex-col items-center justify-center desktopMaxWidth '>
          {user && (
            <div className=' flex flex-col justify-center min-w-full'>
              <div className='container w-full mt-16 mb-2'>
                <PostIconNav handleSort={handleSort} darkEnabled={darkEnabled} />
              </div>
              {activeSort === 'rows' && <PostList profile={profile} posts={posts} handleShowProfile={handleShowProfile} />}
              {activeSort === 'meals' && (
                <MealCard posts={posts} />
              )}
              {activeSort === 'map' &&

                <h1>Google Map Intergration Coming Soon!</h1>
                }
              {/* {activeSort === 'map' && isLoaded && <Map posts={posts} />} */}
              {/* {activeSort === 'map' && !isLoaded && <Loading />} */}
            </div>
          )}
        </main>
      ) : (
        <Splash handleAuthEvt={handleAuthEvt} />
      )}
    </div>
  );

};


export default Landing
