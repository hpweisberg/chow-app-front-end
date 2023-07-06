import { useState, useEffect } from 'react';
import Button from "../../components/Button/Button";
import PostIconNav from '../../components/PostIconNav/PostIconNav';
import MealCard from '../../components/MealCard/MealCard';
import PostList from '../PostList/PostList';
import { Link, useParams } from "react-router-dom";
import * as profileService from '../../services/profileService';

import ProfilePageTopCard from '../../components/ProfilePageTopCard/ProfilePageTopCard';

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

  return (
    <main className="container flex flex-col items-center justify-center">
      <ProfilePageTopCard profile={profile} handleLogout={handleLogout} handleSort={handleSort}  />
      <div className='flex items-center justify-between w-64 py-4'>
        <PostIconNav handleSort={handleSort} />
      </div>
      {activeSort === 'rows' && <PostList posts={profile.posts} />}
      {activeSort === 'meals' && (
        <>
          <MealCard mealName='Breakfast' />
          <MealCard mealName='Lunch' />
          <MealCard mealName='Dinner' />
          <MealCard mealName='Snack' />
          <MealCard mealName='Dessert' />
          <MealCard mealName='Drink' />
          <MealCard mealName='Brunch' />
          <MealCard mealName='Other' />
        </>
      )}
      {activeSort === 'map' && <></>}
    </main>
  );
};

export default Profile;
