import * as profileService from '../../services/profileService';
import Button from '../Button/Button';

const AcceptRequest = ({ request, }) => {
  // console.log('accepting reqfuest', request);
  const handleAcceptRequest = async () => {
    profileService.acceptFriendRequest(request);
  }

  return (
    <div>
      <Button btnText={'✅'} onClick={handleAcceptRequest} />
    </div>
  );
}

export default AcceptRequest;