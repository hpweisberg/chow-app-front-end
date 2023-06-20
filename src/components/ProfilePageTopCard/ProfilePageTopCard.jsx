import { Link } from "react-router-dom";
import Button from "../Button/Button";

import AcceptRequest from "../FriendRequests/AcceptRequest";


const ProfilePageTopCard = ({ profile, displayedProfile, handleLogout, handleSort, friendRequestsCount }) => {
  const isOwnProfile = profile._id === displayedProfile._id; // Check if the displayed profile is the same as the signed-in user's profile



  return (
    <>
      <div className="flex justify-center gap-3 flex-nowrap">
        {/* Profile image */}
        <img className="h-40 border-4 border-black rounded-full" src={displayedProfile.photo} alt="" />

        <div>
          {/* Profile information */}
          <h1 className="text-2xl font-bold">{displayedProfile.name}</h1>
          <div className="flex flex-row justify-center gap-3">
            <div className="flex flex-col items-center justify-center">
              <p>{displayedProfile.posts.length}</p>
              <p>Posts</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Link to={`/${profile._id}/friendsList`}>
                <p>{displayedProfile.friends.length}</p>
              </Link>
              <p>Friends</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>492</p>
              <p>Following</p>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-3">
            <Button btnText={'Edit profile'} />
            <Button btnText={'Share profile'} />
          </div>
          {!isOwnProfile && <AcceptRequest />}
          {!isOwnProfile && <Button btnText={'Remove Friend'} />}
          {isOwnProfile && <Button btnText={'Logout'} onClick={handleLogout} />}
        </div>
      </div>
      <p>friend request: </p>
      <Link to='/friend-requests'>{friendRequestsCount}</Link>
    </>
  );
}

export default ProfilePageTopCard;