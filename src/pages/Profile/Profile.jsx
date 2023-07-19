import { useLoadScript } from "@react-google-maps/api";
import PostIconNav from '../../components/PostIconNav/PostIconNav';
import MealCard from '../../components/MealCard/MealCard';
import PostList from '../PostList/PostList';
// import * as profileService from '../../services/profileService';

import ProfilePageTopCard from '../../components/ProfilePageTopCard/ProfilePageTopCard';
import BackBtn from '../../components/BackBtn/BackBtn';
import Loading from "../Loading/Loading";
import Map from "../../components/Map/Map";

const Profile = ({ user, activeSort, handleSort, profile, handleLogout, posts }) => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDHxO2cQAXBHkIJ0P9Augy9SmBiI-iat1o',
    libraries: ["places"],
  })

  console.log('profile: ', profile)

  //? Keep here while content is loading
  if (!profile) {
    return <div>Loading...</div>;
  }

  const isOwner = user?.handle === profile?.handle;

  const isFriends = profile?.friends?.includes(user.handle);

  const awaitingFriendRequest = profile?.friendRequests?.includes(user.handle);


  console.log('awaitingFriendRequest: ', awaitingFriendRequest);
  console.log('isFriends: ', isFriends);
  console.log('profile: ', profile.friends)
  console.log('user: ', user.handle)

  return (
    <main className="container flex flex-col items-center justify-center">
      {!isOwner && <BackBtn />}
      <ProfilePageTopCard profile={profile} handleLogout={handleLogout} handleSort={handleSort} isOwner={isOwner} isFriends={isFriends} awaitingFriendRequest={awaitingFriendRequest}/>
      <div className='flex items-center justify-between w-full py-4'>
        <PostIconNav handleSort={handleSort} />
      </div>
      {activeSort === 'rows' && <PostList posts={profile.posts} />}
      {activeSort === 'meals' && (

        <MealCard posts={posts} />

      )}
      {activeSort === 'map' && isLoaded && <Map posts={posts} />}
      {activeSort === 'map' && !isLoaded && <Loading />}
    </main>
  );
};

export default Profile;
