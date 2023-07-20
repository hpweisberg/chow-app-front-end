import * as profileService from '../../services/profileService';
import Button from '../Button/Button';

const RejectRequest = ({ request, }) => {
  // console.log('accepting reqfuest', request);
  const handleRejectRequest = async () => {
    profileService.rejectFriendRequest(request);
  }

  return (
    <div>
      <Button btnText={'❌'} onClick={handleRejectRequest} />
    </div>
  );
}

export default RejectRequest;