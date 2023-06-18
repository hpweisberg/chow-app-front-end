import { useState, useEffect } from 'react';
import Button from "../../components/Button/Button";
import PostIconNav from '../../components/PostIconNav/PostIconNav';
import MealCard from '../../components/MealCard/MealCard';
import PostList from '../PostList/PostList';
import { Link, useParams } from "react-router-dom";
import * as profileService from '../../services/profileService';

const Profile = ({ user, activeSort, handleSort, profile, handleLogout }) => {
  // ! Prof = user card. 
  //! Profile = profile card.
  // ? Need to fix this. When on a user profile and select own profile from nav bar, no change.

  
  const params = useParams();
  const id = params.id;

  const [prof, setProf] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (prof === null) {
        const profileData = await profileService.getProfile(id);
        setProf(profileData);
      }
    };
    fetchProfile();
  }, [id, prof]);

  const displayProfile = () => {
    if (prof) {
      return prof;
    } else {
      return profile;
    }
  };

  const displayedProfile = displayProfile();

  console.log('displayProfile: ',displayProfile());

  const friendRequestsCount = displayProfile().friendRequests.length;

  return (
    <main className="container flex flex-col items-center justify-center">
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
              <p>{displayedProfile.friends.length}</p>
              <p>Followers</p>
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
          <Button btnText={'Logout'} onClick={handleLogout} />
        </div>
      </div>
      <p>friend request: </p>
      <Link to='/friend-requests'>{friendRequestsCount}</Link>
      <div className='flex items-center justify-between w-64 py-4'>
        <PostIconNav handleSort={handleSort} />
      </div>
      {activeSort === 'rows' && <PostList posts={displayProfile().posts} />}
      {activeSort === 'meals' && (
        <>
          <MealCard mealName='Breakfast' />
          <MealCard mealName='Lunch' />
          <MealCard mealName='Dinner' />
          <MealCard mealName='Snack' />
          <MealCard mealName='Dessert' />
          <MealCard mealName='Drink' />
          <MealCard mealName='Brunch' />
          <MealCard mealName='Other' />
        </>
      )}
      {activeSort === 'map' && <></>}
    </main>
  );
};

export default Profile;
