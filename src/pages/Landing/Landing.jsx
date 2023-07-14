// import { useState } from 'react'

// css
import PostList from '../PostList/PostList'
import PostIconNav from '../../components/PostIconNav/PostIconNav'
import MealCard from '../../components/MealCard/MealCard'
import Map from '../../components/Map/Map'
import { NavLink } from 'react-router-dom'
NavLink




const Landing = ({ user, posts, handleSort, activeSort, profile, filteredPosts }) => {
  // console.log('second time:: ',logedInUser)
  // const mealCategories = ['Breakfast', 'Lunch', 'Dinner', 'Brunch', 'Snack', 'Drink', 'Dessert', 'Other'];
console.log('filteredPosts: ', filteredPosts)


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
              {/* {posts.map((category) => (
                <MealCard
                  key={category}
                  mealName={category}
                  posts={posts}
                />
              ))} */}
              <MealCard posts={posts} />
            </>
          )}
          {activeSort === 'map' && <Map />}
        </div>
      )}
    </main>
  );
};


export default Landing
