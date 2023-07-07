// import { useState } from 'react'

// css
import PostList from '../PostList/PostList'
import PostIconNav from '../../components/PostIconNav/PostIconNav'
import MealCard from '../../components/MealCard/MealCard'
import { NavLink } from 'react-router-dom'
NavLink




const Landing = ({ user, posts, handleSort, activeSort, handleMealCardClick, profile, logedInUser, handleLogout }) => {
  // console.log('second time:: ',logedInUser)


  return (
    // <main>
    //   <h1>hello, {user ? user.handle : 'friend'}</h1>
    //   <button onClick={handleLogout}>Logout</button>
    // </main>
    <main className=''>
      {/* <h1>hello, {user ? user.name : 'friend'}</h1> */}
      {user &&
        <div className='flex flex-col justify-center border ' >
          {/* <h1 className="border-4 border-green-600">
      Hello world!
    </h1>
            <h2 className='text-primary-932'>Howdy World</h2> */}
          <div className='w-full mt-14'>
            <PostIconNav handleSort={handleSort} />
          </div>
          {/* <PostList posts={posts} /> */}
          {activeSort === 'rows' && <PostList profile={profile} posts={posts}/>}
      {activeSort === 'meals' &&
        <>
          <MealCard mealName='Breakfast' onClick={handleMealCardClick} />
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
      {/* <PostList posts={profile} /> */}
        </div>
      }
    </main>
  )
}

export default Landing
