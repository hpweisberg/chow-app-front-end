import { useEffect, useState } from 'react'
import * as profileService from '../../services/profileService'

import FriendListCard from '../../components/FriendListCard/FriendListCard'

const FriendRequests = ({ user, profile }) => {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    const fetchRequests = async () => {
      const requestData = await profileService.friendRequests()
      setRequests(requestData)
    }
    fetchRequests()
  }, [])
  console.log('requests:', requests)

  return (
    <main>
      <h1>Friend Requests</h1>
      {requests.length !== 0 ?
        <>
          <p>Here are your friend requests</p>
          <FriendListCard requests={requests} user={user}/>
        </>
      :
      <p>No friend requests</p>

    }
    </main>
  );
}

export default FriendRequests;

// {user ?
//   <ul>
//     <li>Welcome, {user.name}</li>
//     <li><NavLink to="/profiles">Profiles</NavLink></li>
//     <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
//     <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
//     <li><NavLink to="/posts/new">Create Post</NavLink></li>
//   </ul>
// :
//   <ul>
//     <li><NavLink to="/auth/login">Log In</NavLink></li>
//     <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
//   </ul>
// }
// </nav>