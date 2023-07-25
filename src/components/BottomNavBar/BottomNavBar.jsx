import * as profileService from '../../services/profileService';

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Home, NewPost } from "../../components/Icons/Icons";

const BottomNavBar = ({ user, handleShowProfile, handleSetFollowingPosts, userProfile, darkEnabled }) => {
  const handleUserProfileClick = (userProfile) => {
    handleShowProfile(userProfile);
  }

  return (
    <div className='flex justify-center'>
      <nav className='container fixed flex w-8/12 h-16 text-white border-4 border-slate-100 rounded-full shadow-lg white border- bottom-1 bg-slate-300 dark:bg-dark-background-200
      dark:border-dark-background-100'>
        {user ?
          <ul className='flex items-center justify-around w-full'>
            <li className=''>
              <NavLink to="/">
                <div className='h-12 w-12'>
                  <Home onClick={() => handleSetFollowingPosts()} className='w-full h-full'
                    fill={darkEnabled ? '#404040' : '#171717'} />
                </div>
              </NavLink>
            </li>
            <li><NavLink to="/posts/new">
              <div className='h-12 w-12'>
                <NewPost className='w-full h-full'
                fill={darkEnabled ? '#404040' : '#171717'} />
              </div>
            </NavLink></li>
            <li><NavLink to={`/${user.handle}`}>
              <div className='h-12 w-12'>
                {/* <Profile className='w-full h-full' user={user} /> */}
                <img onClick={() => handleUserProfileClick(user)} src={user.photo} alt="profile" className='w-full h-full border-2 border-white dark:border-dark-background-100 rounded-full' />
              </div>
            </NavLink></li>
          </ul>
          :
          <ul>
            <li><NavLink to="/auth/login">Log In</NavLink></li>
            <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
          </ul>
        }
      </nav>
    </div>
  )
}

export default BottomNavBar
