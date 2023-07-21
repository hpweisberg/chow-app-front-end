import Button from "../Button/Button";

const ProfileBtns = ({
  isOwner,
  isFriends,
  isFollowing,
  awaitingFriendRequest,
}) => {
  let buttonText = "";

  switch (true) {
    case awaitingFriendRequest:
      buttonText = "Accept Friend Request";
      break;
    case !isOwner && !isFriends && !isFollowing:
      buttonText = "Follow";
      break;
    case !isOwner && !isFollowing && isFriends:
      buttonText = "Friends";
      break;
    case !isOwner && !isFriends && isFollowing:
      buttonText = "Following";
      break;
      case isOwner:
        buttonText = "";
        break;
    default:
      // You can set a default value for buttonText if none of the cases match.
      // For example: buttonText = "Default";
      break;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {buttonText && (
        <div className="m-2">
          <Button btnText={buttonText} onClick={() => {}} />
        </div>
      )}
      {awaitingFriendRequest && (
        <div className="m-2">
          <Button btnText="Reject Friend Request" onClick={() => {}} />
        </div>
      )}
    </div>
  );
};

export default ProfileBtns;
