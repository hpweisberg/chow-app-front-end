import { Link } from "react-router-dom";
import Button from "../Button/Button";

import AcceptRequest from "../FriendRequests/AcceptRequest";
import AddFriend from "../FriendRequests/AddFriend";

import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";
import ProfileBtns from "../ProfileBtns/ProfileBtns";
import FollowingTracker from "../FollowingTracker/FollowingTracker";



const ProfilePageTopCard = ({ profile, handleLogout, handleSort, friendRequestsCount, isOwner, isFriends, awaitingFriendRequest, iAmFollowing, followThisProfile, unfollowThisProfile, acceptFollowRequest, rejectFollowRequest, awaitingFollowRequest, followRequestRecieved, darkEnabled }) => {


  return (
    <div className="mt-20 container desktopMaxWidth ">

      <div className="flex w-full mb-2 desktopMaxWidth">
        <div className="flex flex-col items-center justify-center ml-2 w-2/6 ">
          <img src={profile.photo} alt="" className="h-24 w-24 border-4 border-black rounded-full mx-4" />
          <ProfileBtns
            isOwner={isOwner}
            isFriends={isFriends}
            awaitingFriendRequest={awaitingFriendRequest}
            iAmFollowing={iAmFollowing}
            followThisProfile={followThisProfile}
            unfollowThisProfile={unfollowThisProfile}
            acceptFollowRequest={acceptFollowRequest}
            rejectFollowRequest={rejectFollowRequest}
            profile={profile}
            awaitingFollowRequest={awaitingFollowRequest}
            followRequestRecieved={followRequestRecieved}
          />
        </div>
        <div className="w-4/5 px-2">

          <div className="flex justify-between items-center mr-1">
            <h1 className="m-0 mr-4 text-2xl font-bold">{profile.handle}</h1>
            {isOwner && <ProfileDropDown handleLogout={handleLogout} profile={profile} darkEnabled={darkEnabled} />}
            {/* <ProfileDropDown handleLogout={handleLogout} profile={profile} darkEnabled={darkEnabled}/> */}
          </div>

          <div className="">
            <h4 className="m-0 mr-4 font-bold">{profile.name}</h4>
            <p>{profile.bio}</p>
            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt pariatur eligendi culpa deserunt molestias asperiores, dolorem explicabo saepe? Dolore, non.</p> */}
          </div>
        </div>
      </div>
      <div className="desktopMaxWidth">

        <FollowingTracker profile={profile} />
      </div>

    </div>
  );
}

export default ProfilePageTopCard;


// <>
// <div className="flex justify-center gap-3 flex-nowrap w-full bg-red-500 mt-20">
//   {/* Profile image */}
//   <img className="h-24 w-24 border-4 border-black rounded-full" src={profile.photo} alt="" />

//   <div>
//     <div className="flex items-center justify-between">
//       <h1 className="text-2xl font-bold">{profile.name}</h1>
//       {isOwner && <ProfileDropDown handleLogout={handleLogout}/>}
//     </div>
//     <div className="flex flex-row justify-center gap-3">
//       {/* <div className="flex flex-col items-center justify-center">
//         <p>{profile.posts.length}</p>
//         <p>Posts</p>
//       </div> */}
//       <div className="flex flex-col items-center justify-center">
//         <Link to={`/${profile.handle}/friendsList`}>
//           <p>{profile.friends.length}</p>
//         </Link>
//         <p>Friends</p>
//       </div>
//       <div className="flex flex-col items-center justify-center">
//         <p>492</p>
//         <p>Following</p>
//       </div>
//     </div>
//     <div className="flex flex-row justify-center gap-3 bg-red-200">
//       {!isOwner && !isFriends && !awaitingFriendRequest && <AddFriend request={profile.handle} />}
//       {!isOwner && !isFriends && awaitingFriendRequest && <AcceptRequest />}
//       {!isOwner && isFriends && <Button btnText={'Remove Friend'} />}
//     </div>
//   </div>
// </div>
// {/* <p>friend request: </p>
// <Link to='/friend-requests'>{friendRequestsCount}</Link> */}
// </>