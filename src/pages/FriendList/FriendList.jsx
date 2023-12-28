import * as profileService from "../../services/profileService";

import { useEffect, useState } from 'react';
import BackBtn from "../../components/BackBtn/BackBtn";
import FriendListCard from "../../components/FriendListCard/FriendListCard";

const FriendList = ({ profile }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const handleFriendList = async () => {
      const friendList = await profileService.friendList(profile._id);
      setFriends(friendList);
    };

    handleFriendList();
  }, [profile._id]);

  return (
    <main>
      <BackBtn />
      <h1>FriendList</h1>
        <FriendListCard requests={friends} key={friends._id} />
    </main>
  );
}

export default FriendList;
