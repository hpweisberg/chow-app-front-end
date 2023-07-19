import * as profileService from '../../services/profileService';
import Button from '../Button/Button';

const AddFriend = ({ request, }) => {
  // console.log('accepting reqfuest', request);
  const handleAddFriend = async () => {
    profileService.sendFriendRequest(request);
  }

  return (
    <div>
      <Button btnText={'Send friend request'} onClick={handleAddFriend} />
    </div>
  );
}

export default AddFriend;