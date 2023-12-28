import { useState, useEffect } from 'react'
import { useLoadScript, } from '@react-google-maps/api';
import { googleMap } from '../../services/authService';


// css
import PostList from '../PostList/PostList'
import PostIconNav from '../../components/PostIconNav/PostIconNav'
import MealCard from '../../components/MealCard/MealCard'
import Map from '../../components/Map/Map'
import Loading from "../Loading/Loading";
import Splash from "../Splash/Splash";
import NoFollowingScreen from "../../components/NoFollowingScreen/NoFollowingScreen";

// import { GoogleMap, useLoadScript, Marker, } from "@react-google-maps/api"

const libraries = ["places"]; 



const Landing = ({ user, posts, handleSort, activeSort, profile, handleShowProfile, handleAuthEvt, darkEnabled, userProfile, }) => {
  // restricted on google platform for testing
  const [apiKey, setApiKey] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: libraries,
  });

  useEffect(() => {
    const fetchApiKey = async () => {
      try {
          const key = await googleMap();
          setApiKey(key);
      } catch (error) {
        console.error('Error fetching key:', error);
      }
    };

    fetchApiKey();
  }, []);




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
                <h2 className='flex justify-center'>Temporarily unavailable</h2>
                }
                
              {/* {activeSort === 'map' && isLoaded && <Map posts={posts} />}
              {activeSort === 'map' && !isLoaded && <Loading />} */}
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
