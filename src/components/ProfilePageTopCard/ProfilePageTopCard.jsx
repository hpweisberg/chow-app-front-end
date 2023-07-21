import { Link } from "react-router-dom";
import Button from "../Button/Button";

import AcceptRequest from "../FriendRequests/AcceptRequest";
import AddFriend from "../FriendRequests/AddFriend";

import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";


const ProfilePageTopCard = ({ profile, handleLogout, handleSort, friendRequestsCount, isOwner, isFriends, awaitingFriendRequest }) => {


  return (
    <>
      <div className="flex justify-center gap-3 flex-nowrap mt-20">
        {/* Profile image */}
        <img className="h-32 w-32 border-4 border-black rounded-full" src={profile.photo} alt="" />

        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            {isOwner && <ProfileDropDown handleLogout={handleLogout}/>}
            {/* {isOwner &&
              <Link to={`/edit-profile`}>
                <ProfileDropDown />
                <h1 className="text-2xl font-bold ml-2 text-black pr-2">...</h1>
              </Link>
            } */}
          </div>
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
          <div className="flex flex-row justify-center gap-3 bg-red-200">
            {!isOwner && !isFriends && !awaitingFriendRequest && <AddFriend request={profile.handle} />}
            <Button btnText={'Share'} />
            {!isOwner && !isFriends && awaitingFriendRequest && <AcceptRequest />}
            {!isOwner && isFriends && <Button btnText={'Remove Friend'} />}
            {isOwner && <Button btnText={'LG'} onClick={handleLogout} />}
          </div>
        </div>
      </div>
      {/* <p>friend request: </p>
      <Link to='/friend-requests'>{friendRequestsCount}</Link> */}
    </>
  );
}

export default ProfilePageTopCard;