import * as profileService from '../../services/profileService';

const AcceptRequest = ({request, }) => {
  const handleAcceptRequest = async () => {
    const newFriend = await profileService.acceptFriendRequest(request.id);
    

  return (
    <div>

    </div>
  );
}

export default AcceptRequest;