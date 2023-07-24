import { useEffect, useState } from 'react'
import * as profileService from '../../services/profileService'
import FriendListCard from '../FriendListCard/FriendListCard'



const FollowRequests = ({ user, profile }) => {
  const [requests, setRequests] = useState([])

  // console.log(requests)
  useEffect(() => {
    const fetchRequests = async () => {
      const requestData = await profileService.followRequests()
      setRequests(requestData)
    }
    fetchRequests()
  }, [])

  return (
    <div>
      <h1>Follow Requests</h1>
      {requests.length !== 0 ? (
        <div id={requests.handle}>
          <h2>Friend Requests:</h2>
          <FriendListCard requests={requests} user={user} />
          {/* <FriendListCard requests={requests} user={user} /> */}
        </div>
      ) : (
        <p>No friend requests</p>
      )}
    </div>
  );
}

export default FollowRequests;