import * as profileService from '../../services/profileService';

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Home, NewPost } from "../../components/Icons/Icons";

const BottomNavBar = ({ user, handleShowProfile, handleSetFriendsPosts }) => {
  const handleUserProfileClick = (profileData) => {
    handleShowProfile(profileData);
  }

  return (
    <div className='flex justify-center'>
      <nav className='container fixed flex w-11/12 h-16 text-white border-4 rounded-full shadow-lg white border- bottom-1 bg-slate-300'>
        {user ?
          <ul className='flex items-center justify-around w-full'>
            <li className=''>
              <NavLink to="/">
                <div className='h-16 w-14'>
                  <Home onClick={() => handleSetFriendsPosts()} className='w-full h-full' />
                </div>
              </NavLink>
            </li>
            <li><NavLink to="/posts/new">
              <div className='h-16 w-14'>
                <NewPost className='w-full h-full' />
              </div>
            </NavLink></li>
            <li><NavLink to={`/${user.handle}`}>
              <div className='h-14 w-14'>
                {/* <Profile className='w-full h-full' user={user} /> */}
                <img onClick={() => handleUserProfileClick(user)} src={user.photo} alt="profile" className='w-full h-full border-2 border-white rounded-full' />
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
