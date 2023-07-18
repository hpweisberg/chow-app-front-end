import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackBtn from '../../components/BackBtn/BackBtn';
import * as profileService from '../../services/profileService';


const EditProfile = ({user, profile}) => {
  const { state } = useLocation();
  const [formData, setFormData] = useState(state);
  const navigate = useNavigate();

  console.log('my profile: ', profile)

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    profileService.updateProfile(formData, user.id)
    navigate(`/${user.handle}`); // Replace with the appropriate URL for the user's profile page
  };

  const handleChangeProfilePicture = (evt) => {
    setFormData({ ...formData, profilePicture: evt.target.files[0] });
  };

  return (
    <main className="mt-20 flex flex-col items-center">
      <div className="flex">
        <BackBtn />
        <h1>Edit Profile</h1>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <label htmlFor="profile-picture-input">Profile Picture</label>
        <input
          type="file"
          name="profilePicture"
          placeholder=''
          onChange={handleChangeProfilePicture}
        />
        <label htmlFor="name-input">Name</label>
        <input
          required
          type="text"
          name="name"
          placeholder={profile.name}
          value={formData?.name}
          onChange={handleChange}
        />
        {/* <label htmlFor="handle-input">Handle</label>
        <input
          required
          type="text"
          name="handle"
          placeholder={user.handle}
          value={formData?.handle}
          onChange={handleChange}
        /> */}
        <label htmlFor="bio-input">Bio</label>
        <textarea
        className='border-2'
          name="bio"
          value={formData?.bio}
          onChange={handleChange}
          placeholder={profile.bio}
        ></textarea>
        <button type="submit">Save Changes</button>
      </form>
      <a href="/change-password">Change Password</a>
    </main>
  );
};

export default EditProfile;
