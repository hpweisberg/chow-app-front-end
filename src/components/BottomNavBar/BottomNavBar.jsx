import { NavLink } from 'react-router-dom'
import { Home, NewPost, Profile } from "../../components/Icons/Icons";

const BottomNavBar = ({ user }) => {
  return (
    <nav className='sticky bottom-0 flex w-full h-16 text-white shadow-md justify bg-slate-600'>
      {user ?
        <ul className='flex items-center justify-around w-full'>
          <li className=''>
            <NavLink to="/">
              <div className='h-16 w-14'>
                <Home className='w-full h-full' />
              </div>
            </NavLink>
          </li>
          <li><NavLink to="/posts/new">
            <div className='h-16 w-14'>
              <NewPost className='w-full h-full' />
            </div>
          </NavLink></li>
          <li><NavLink to="/profile/">
            <div className='h-16 w-14'>
              <Profile className='w-full h-full' />
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
  )
}

export default BottomNavBar
