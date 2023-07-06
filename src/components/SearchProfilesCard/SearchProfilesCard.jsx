// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as profileService from "../../services/profileService";



const SearchProfilesCard = ({ profile }) => {
  // const navigate = useNavigate();
  const id = profile._id

  console.log(id)

  const handleClick = (id) => {
    profileService.getProfile(id)
    // navigate(`/profile/${id}`);
  }

  return (
    <Link to={`/${profile.handle}`}>
      <div onClick={handleClick} className="friendListCard">
        <img className="w-20 h-20 rounded-full" src={profile.photo} alt={profile.name} />
        <div>
          <h1>{profile.name}</h1>
          <h4 className="opacity-75">@Harrison</h4>
        </div>
      </div>
    </Link>
  );
}

export default SearchProfilesCard;