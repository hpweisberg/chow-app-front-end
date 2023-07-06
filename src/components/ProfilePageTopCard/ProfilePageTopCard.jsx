import { Link } from "react-router-dom";
import Button from "../Button/Button";

import AcceptRequest from "../FriendRequests/AcceptRequest";


const ProfilePageTopCard = ({ profile, handleLogout, handleSort, friendRequestsCount }) => {

  const isOwnProfile = profile._id === localStorage.getItem('userId')


  return (
    <>
      <div className="flex justify-center gap-3 flex-nowrap">
        {/* Profile image */}
        <img className="h-40 border-4 border-black rounded-full" src={profile.photo} alt="" />

        <div>
          {/* Profile information */}
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <div className="flex flex-row justify-center gap-3">
            <div className="flex flex-col items-center justify-center">
              <p>{profile.posts.length}</p>
              <p>Posts</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Link to={`/${profile.handle}/friendsList`}>
                <p>{profile.friends.length}</p>
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