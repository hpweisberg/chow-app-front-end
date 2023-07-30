const FollowingTracker = ({ profile }) => {
  return (
    <div className="w-full flex items-center justify-center border-t-2 pt-2">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-bold text-md">{profile?.posts?.length}</p>
        <p className="opacity-70">Posts</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-bold text-md">{profile?.followers?.length}</p>
        <p className="opacity-70">Followers</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-bold text-md">{profile?.following?.length}</p>
        <p className="opacity-70">Following</p>
      </div>

    </div>
  );
}

export default FollowingTracker;