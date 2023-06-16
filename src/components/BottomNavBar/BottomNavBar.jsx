import { NavLink } from 'react-router-dom'
import { Home, NewPost, Profile } from "../../components/Icons/Icons";

const BottomNavBar = ({ user }) => {
  return (
    <div className='flex justify-center'>
      <nav className='container fixed flex w-11/12 h-16 text-white border-4 rounded-full shadow-lg white border- bottom-1 bg-slate-300'>
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
            <li><NavLink to={`/profile/${user._id}`}>
              <div className='h-16 w-14'>
                <Profile className='w-full h-full' user={user} />
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
