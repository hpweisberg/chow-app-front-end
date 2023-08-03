import { Link } from "react-router-dom";


const FollowingTracker = ({ profile }) => {
  return (
    <div className="w-full flex items-center justify-center border-t-2 pt-2">
      <Link >
      <div className="w-[33vw] flex flex-col items-center justify-center text-black dark:text-dark-txt-100 hover:cursor-default">
        <p className="text-bold text-md">{profile?.posts?.length}</p>
        <p className="opacity-70">Posts</p>
      </div>
      </Link>
      <Link to={`/${profile?.handle}/followers-list`}>
        <div className="w-[33vw] flex flex-col items-center justify-center hover:cursor-pointer text-black dark:text-dark-txt-100">
          <p className="text-bold text-md">{profile?.followers?.length}</p>
          <p className="opacity-70">Followers</p>
        </div>
      </Link>

      <Link to={`/${profile?.handle}/following-list`}>
        <div className="w-[33vw] flex flex-col items-center justify-center hover:cursor-pointer text-black dark:text-dark-txt-100">
          <p className="text-bold text-md">{profile?.following?.length}</p>
          <p className="opacity-70">Following</p>
        </div>
      </Link>

    </div>
  );
}

export default FollowingTracker;