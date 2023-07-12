import { useState, useEffect } from 'react';
import Button from "../../components/Button/Button";
import PostIconNav from '../../components/PostIconNav/PostIconNav';
import MealCard from '../../components/MealCard/MealCard';
import PostList from '../PostList/PostList';
import { Link, useParams } from "react-router-dom";
import * as profileService from '../../services/profileService';

import ProfilePageTopCard from '../../components/ProfilePageTopCard/ProfilePageTopCard';
import BackBtn from '../../components/BackBtn/BackBtn';

const Profile = ({ user, activeSort, handleSort, profile, handleLogout, posts }) => {
  // ! Prof = user card. 
  //! Profile = profile card.
  // ? Need to fix this. When on a user profile and select own profile from nav bar, no change.

  console.log('user posts: ', profile);

  // const params = useParams();
  // const id = params.id;


  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     if (id === null) {
  //       const profileData = await profileService.getProfile(id);
  //     }
  //   };
  //   fetchProfile(profileData);
  // }, [id]);


  // console.log('displayProfile: ',displayProfile());

  // const friendRequestsCount = profile.friendRequests?.length;


  //? Keep here while content is loading
  if (!profile) {
    return <div>Loading...</div>;
  }

  const isOwner = user?.handle === profile?.handle;

  const isFriends = profile?.friends?.includes(user.handle);
  console.log('isFriends: ', isFriends);
  console.log('profile: ', profile.friends)
  console.log('user: ', user.handle)

  return (
    <main className="container flex flex-col items-center justify-center">
      {!isOwner && <BackBtn />}
      <ProfilePageTopCard profile={profile} handleLogout={handleLogout} handleSort={handleSort} isOwner={isOwner} isFriends={isFriends} />
      <div className='flex items-center justify-between w-64 py-4'>
        <PostIconNav handleSort={handleSort} />
      </div>
      {activeSort === 'rows' && <PostList posts={profile.posts} />}
      {activeSort === 'meals' && (

        <MealCard posts={posts} />

      )}
      {activeSort === 'map' && <></>}
    </main>
  );
};

export default Profile;
