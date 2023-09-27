import { Link } from "react-router-dom";
// import * as profileService from "../../services/profileService";
import Button from "../Button/Button";

const SearchProfilesCard = ({ profile, handleShowProfile, user }) => {
  const id = profile.handle;

  // const isFriends = profile?.friends?.includes(user.handle);
  const following = profile?.followers?.includes(user.handle);
  const follower = profile?.following?.includes(user.handle);
  const followingEachother = user?.followers?.includes(profile.handle) && profile?.following?.includes(user.handle);

  let buttonText;
  // if (isFriends) {
  //   buttonText = "Friends";
  if (following) {
    buttonText = "Following";
  } else if (follower) {
    buttonText = "Follower";
  } else if (followingEachother) {
    buttonText = "Following Eachother";
  }

  return (
    <Link to={`/${id}`}>
      <div onClick={() => handleShowProfile(profile)} className="friendListCard">
        <div className="flex items-center gap-3 ml-2 ">

          <img className="w-16 h-16 rounded-full" src={profile.photo} alt={profile.name} />
          <div className="text-black dark:text-dark-primary-200">
            <h3 className="text-md font-bold mb-0">@{profile.handle}</h3>
            <h5 className="text-md font-bold opacity-75">{profile.name}</h5>
          </div>
        </div>
        <div className="mr-2">
          {/* need to fix this to all be the same width */}
          {follower || followingEachother || following ? <Button btnText={buttonText} /> : null}

        </div>
      </div>
    </Link>
  );
}

export default SearchProfilesCard;
