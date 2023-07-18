import { Link } from "react-router-dom";
import * as profileService from "../../services/profileService";
import Button from "../Button/Button";

const SearchProfilesCard = ({ profile, handleShowProfile, user }) => {
  const id = profile.handle;

  const isFriends = profile?.friends?.includes(user.handle);
  const following = profile?.followers?.includes(user.handle);

  let buttonText;
  if (isFriends) {
    buttonText = "Friends";
  } else if (following) {
    buttonText = "Following";
  } else {
    buttonText = "Follow";
  }

  return (
    <Link to={`/${id}`}>
      <div onClick={() => handleShowProfile(profile)} className="friendListCard">
        <img className="w-16 h-16 rounded-full" src={profile.photo} alt={profile.name} />
        <div className="ml-1 bg-red-100">
          <h4 className="text-md font-bold">@{profile.handle}</h4>
          <h1 className="text-lg font-bold opacity-75">{profile.name}</h1>
        </div>
        <div className="bg-green-100">
          <Button btnText={buttonText} />
        </div>
      </div>
    </Link>
  );
}

export default SearchProfilesCard;
