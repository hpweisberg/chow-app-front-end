import { useEffect, useState } from 'react'
import * as profileService from '../../services/profileService'
import FriendListCard from '../FriendListCard/FriendListCard'



const FollowRequests = ({ user, profile }) => {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const requestData = await profileService.followRequests();
        console.log('requestData:', requestData);
        setRequests(requestData);
      } catch (error) {
        console.error('Error fetching follow requests:', error);
      }
    };
    fetchRequests();
  }, []);
  

  return (
    <div className='flex flex-col items-center justify-center container desktopMaxWidth'>
      <h1>Follow Requests</h1>
      {requests.length !== 0 ? (
        <div id={requests.handle}>
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