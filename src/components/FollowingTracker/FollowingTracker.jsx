import { Link } from "react-router-dom";


const FollowingTracker = ({ profile }) => {
  return (
    <div className="w-full flex items-center justify-center border-t-2 pt-2">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-bold text-md">{profile?.posts?.length}</p>
        <p className="opacity-70">Posts</p>
      </div>
      <Link to={`/${profile?.handle}/followers-list`}>
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-bold text-md">{profile?.followers?.length}</p>
          <p className="opacity-70">Followers</p>
        </div>
      </Link>

      <div className="w-full flex flex-col items-center justify-center">
      <Link to={`/${profile?.handle}/following-list`}>
        <p className="text-bold text-md">{profile?.following?.length}</p>
        <p className="opacity-70">Following</p>
      </Link>
      </div>

    </div>
  );
}

export default FollowingTracker;