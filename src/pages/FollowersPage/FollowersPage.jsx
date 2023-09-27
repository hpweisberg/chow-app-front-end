import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import FollowRelatedCard from "../../components/FollowRelatedCard/FollowRelatedCard";
import * as profileService from "../../services/profileService";


const FollowersPage = ({handleShowProfile}) => {
  const { handle } = useParams();
  const [followersList, setFollowersList] = useState([]);

  const handleSetFollowingList = useCallback(async () => {
    try {
      const followingList = await profileService.followingList(handle);
      setFollowersList(followingList);
    } catch (err) {
      console.log(err);
      setFollowersList([]);
    }
  }, [handle]);

  useEffect(() => {
    handleSetFollowingList();
  }, [handleSetFollowingList]);

  console.log('handle', handle);
  console.log('fl', followersList);


  return (
    <div className="flex flex-col [w-100vw] items-center">
      <h1 className="mt-20">Followers</h1>
      {followersList.length > 0 ? (
        followersList.map((follower) => (
          <FollowRelatedCard key={follower._id} person={follower} handleShowProfile={handleShowProfile}/>
        ))
      ) : (
        <h1 className="text-center text-2xl">No Followers</h1>
      )}
    </div>
  );
};

export default FollowersPage;
