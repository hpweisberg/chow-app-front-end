// import { useState } from 'react';
import Button from "../../components/Button/Button";
// import { Map, Rows, Meal } from "../../components/Icons/Icons";
import PostIconNav from '../../components/PostIconNav/PostIconNav';
import MealCard from '../../components/MealCard/MealCard';
import PostList from '../PostList/PostList';

const Profile = ({ user, activeSort, handleSort, posts, profile, handleLogout}) => {
  console.log('profileasdfgasrf', profile)
  console.log('postsss', posts)

  return (
    <main className="container flex flex-col items-center justify-center">
      <div className="flex justify-center gap-3 flex-nowrap">

        <img className="h-40 border-4 border-black rounded-full" src={profile.photo} alt="" />

        <div>
          <h1 className="text-2xl font-bold" >
            {user.name}
          </h1>
          <div className="flex flex-row justify-center gap-3">

            <div className="flex flex-col items-center justify-center">
              <p>99</p>
              <p>Posts</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>393</p>
              <p>Followers</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>492</p>
              <p>Following</p>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-3">
            <Button btnText={'Edit profile'} />
            <Button btnText={'Share profile'} />
          </div>
            <Button btnText={'Logout'} onClick={handleLogout} />
        </div>
      </div>
      <div className='flex items-center justify-between w-64 py-4'>
        <PostIconNav handleSort={handleSort} />
      </div>
      {activeSort === 'rows' && <PostList posts={posts} />}
      {activeSort === 'meals' &&
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
      }
      {activeSort === 'map' && <></>}
    </main>
  );
}

export default Profile;
