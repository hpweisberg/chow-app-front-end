// npm modules
import { NavLink } from 'react-router-dom'
import styles from './BottomNavBar.module.css'



const BottomNavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul className={styles.navList}>
          <li><NavLink to="/">Feed</NavLink></li>
          <li><NavLink to="/posts/new" onClick={handleLogout}>New Post</NavLink></li>
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
