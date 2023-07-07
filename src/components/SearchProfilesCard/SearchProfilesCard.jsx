// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as profileService from "../../services/profileService";



const SearchProfilesCard = ({ profile, handleShowProfile }) => {
  // const navigate = useNavigate();
  const id = profile.handle

  console.log('id: ', id)
  console.log('profile:: ', profile)

  // const handleClick = (profile) => {
  //   handleShowProfile(profile)
  //   // navigate(`/profile/${id}`);
  // }

  // const handleShowProfile = async (profile) => {
  //   const profileData = await profileService.getProfile(profile.handle)
  //   setProfile(profileData)
  //   setPosts(profileData.posts)
  //   console.log('profileData: ',profileData)
  //   console.log('profileData.posts: ',profileData.posts)
  // };

  return (
    <Link to={`/${id}`}>
      <div onClick={() => handleShowProfile(profile)}className="friendListCard">
        <img className="w-20 h-20 rounded-full" src={profile.photo} alt={profile.name} />
        <div>
          <h1>{profile.name}</h1>
          <h4 className="opacity-75">@{profile.handle}</h4>
        </div>
      </div>
    </Link>
  );
}

export default SearchProfilesCard;