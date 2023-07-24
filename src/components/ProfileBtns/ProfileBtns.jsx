import Button from "../Button/Button";

const ProfileBtns = ({ isOwner, isFriends, iAmFollowing, awaitingFriendRequest, theyAreFollowingMe, followThisProfile, unfollowThisProfile, acceptFollowRequest, rejectFollowRequest, profile }) => {

  let buttonText = "";

  switch (true) {
    case isOwner && awaitingFriendRequest:
      buttonText = "Accept friend request";
      break;
    // ? reject friend request in the return.
    case !isOwner && !iAmFollowing && !theyAreFollowingMe:
      buttonText = "Follow";
      break;
    // ? Swaped friends out for only follow related.
    // case !isOwner && !iAmFollowing && isFriends:
    //   buttonText = "Friends";
    // break;
    case !isOwner && iAmFollowing && !theyAreFollowingMe:
      buttonText = "Following";
      break;
    case !isOwner && !iAmFollowing && theyAreFollowingMe:
      buttonText = "Follow back";
      break;
    case !isOwner && iAmFollowing && theyAreFollowingMe:
      buttonText = "F&F";
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
          <Button
            btnText={buttonText}
            onClick={() => {
              switch (true) {
                case awaitingFriendRequest:
                  acceptFollowRequest(profile); // Call the function for accepting friend request
                  break;
                case !isOwner && !iAmFollowing && !theyAreFollowingMe:
                  followThisProfile(profile); // Call the function for following
                  break;
                case !isOwner && iAmFollowing && !theyAreFollowingMe:
                  unfollowThisProfile(profile); // Call the function for unfollowing
                  break;
                case !isOwner && !iAmFollowing && theyAreFollowingMe:
                  followThisProfile(profile); // Call the function for follow back
                  break;
                case !isOwner && iAmFollowing && theyAreFollowingMe:
                  // You can implement logic for the "F&F" case here if needed
                  break;
                default:
                  // You can set a default value for buttonText if none of the cases match.
                  // For example: buttonText = "Default";
                  break;
              }
            }}
          />
        </div>
      )}
      {awaitingFriendRequest && (
        <div className="m-2">
          <Button btnText="Reject Friend Request" onClick={() => { }} />
        </div>
      )}
    </div>
  );
};

export default ProfileBtns;
