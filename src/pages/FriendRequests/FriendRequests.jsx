import { useEffect, useState } from 'react'
import * as profileService from '../../services/profileService'

import FriendListCard from '../../components/FriendListCard/FriendListCard'

const FriendRequests = ({ user, profile }) => {
  const [requests, setRequests] = useState([])

  // console.log(requests)
  useEffect(() => {
    const fetchRequests = async () => {
      const requestData = await profileService.friendRequests()
      setRequests(requestData)
    }
    fetchRequests()
  }, [])

  return (
    <main className='mt-10'>
      <h1>Notifications</h1>
      {requests.length !== 0 ? (
        <div id={requests.handle}>
          <h2>Friend Requests:</h2>
          <FriendListCard requests={requests} user={user} />
        </div>
      ) : (
        <p>No friend requests</p>
      )}
    </main>
  );
}

export default FriendRequests;
