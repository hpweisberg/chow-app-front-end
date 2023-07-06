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
  // console.log('requests:', requests)

  return (
    <main>
      <h1>Friend Requests</h1>
      {requests.length !== 0 ? (
        <>
          <p>Here are your friend requests</p>
          <FriendListCard requests={requests} user={user} />
        </>
      ) : (
        <p>No friend requests</p>
      )}
    </main>
  );
}

export default FriendRequests;
