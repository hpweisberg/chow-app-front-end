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

  console.log('friendRequests:', requests)
  // console.log('friendRequests:', profile.friendRequests)
  return (
    <main>
      <h1>Friend Requests</h1>
      <p>Here are your friend requests</p>
      <FriendListCard requests={requests}/>

    </main>
  );
}

export default FriendRequests;