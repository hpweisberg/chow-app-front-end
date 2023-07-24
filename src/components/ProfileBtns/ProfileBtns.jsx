import { useEffect, useState } from "react";
import Button from "../Button/Button";

const ProfileBtns = ({ isOwner, isFriends, iAmFollowing, awaitingFriendRequest, theyAreFollowingMe, followThisProfile, unfollowThisProfile, acceptFollowRequest, rejectFollowRequest, profile, awaitingFollowRequest, followRequestRecieved }) => {

  const [showFollowRequestButtons, setShowFollowRequestButtons] = useState(followRequestRecieved);

  let buttonText = "";

  switch (true) {
    case followRequestRecieved && awaitingFollowRequest:
      buttonText = "Accept friend request";
      break;
    // ? reject friend request in the return.
    case !isOwner && awaitingFollowRequest:
      buttonText = "Request sent";
      break;
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
// ! update accept, reject btns after click
  useEffect(() => {
    setShowFollowRequestButtons(followRequestRecieved);
  }, [followRequestRecieved]);

  const handleAcceptRequest = () => {
    acceptFollowRequest(profile);
    setShowFollowRequestButtons(false); // Hide the follow request buttons after accepting
  };

  const handleRejectRequest = () => {
    rejectFollowRequest(profile);
    setShowFollowRequestButtons(false); // Hide the follow request buttons after rejecting
  };


  return (
    <div className="flex flex-col justify-center items-center">
      {buttonText && (
        <div className="m-2">
          <Button
            btnText={buttonText}
            onClick={() => {
              switch (true) {
                case awaitingFollowRequest:
                  acceptFollowRequest(profile); // Call the function for accepting friend request
                  break;
                case !isOwner && awaitingFollowRequest:
                  break;
                case !isOwner && !iAmFollowing && !theyAreFollowingMe:
                  followThisProfile(profile); // Call the function for following
                  // console.log('pressed')
                  break;
                case !isOwner && iAmFollowing && !theyAreFollowingMe:
                  unfollowThisProfile(profile); // Call the function for unfollowing
                  break;
                case !isOwner && !iAmFollowing && theyAreFollowingMe:
                  followThisProfile(profile); // Call the function for follow back
                  break;
                case !isOwner && iAmFollowing && theyAreFollowingMe:
                  // You can implement logic for the "F&F" case here if needed
                  unfollowThisProfile(profile)
                  break;
                default:
                  break;
              }
            }}
          />
        </div>
      )}
      {showFollowRequestButtons && (
        <div className="m-2">
          <Button btnText="Accept Request" onClick={handleAcceptRequest} />
          <Button btnText="Reject Request" onClick={handleRejectRequest} />
        </div>
      )}
    </div>
  );
};

export default ProfileBtns;
