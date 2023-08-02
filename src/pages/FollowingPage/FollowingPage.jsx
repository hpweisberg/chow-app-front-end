import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import * as profileService from "../../services/profileService";

import FollowRelatedCard from '../../components/FollowRelatedCard/FollowRelatedCard';

const FollowingPage = ({handleShowProfile}) => {
  const { handle } = useParams();
  const [followingList, setFollowingList] = useState([]);

  const handleSetFollowingList = useCallback(async () => {
    try {
      const followingList = await profileService.followingList(handle);
      setFollowingList(followingList);
    } catch (err) {
      console.log(err);
      setFollowingList([]);
    }
  }, [handle]);

  useEffect(() => {
    handleSetFollowingList();
  }, [handleSetFollowingList]);

  console.log('handle', handle);
  console.log('fl', followingList);

  return (
    <div>
      <h1 className="mt-20">Following Page</h1>
      {followingList.length > 0 ? (
        followingList.map((follower) => (
          <FollowRelatedCard key={follower._id} person={follower} handleShowProfile={handleShowProfile}/>
        ))
      ) : (
        <h1 className="text-center text-2xl">No Followers</h1>
      )}
    </div>
  );
};

export default FollowingPage;
