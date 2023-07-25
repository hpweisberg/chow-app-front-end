import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackBtn from '../../components/BackBtn/BackBtn';
// import * as profileService from '../../services/profileService';
import { ChoseImage } from '../../components/Icons/Icons';


const EditProfile = ({ user, profile, handleUpdateProfile }) => {
  const { state } = useLocation();
  const [formData, setFormData] = useState(state);
  const navigate = useNavigate();
  const [photoData, setPhotoData] = useState({});

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = { ...formData };
      if (photoData.photo) {
        updatedData.photo = photoData.photo;
      }
      await handleUpdateProfile(updatedData);
      navigate(`/${user.handle}`);
    } catch (error) {
      console.log('Error:', error);
      // Handle any error state here if needed
    }
  };

  const handleChangeProfilePicture = (evt) => {
    setPhotoData({ photo: evt.target.files[0] });
  };

  return (
    <main className="mt-20 flex flex-col items-center">
      <div className="flex">
        <BackBtn />
        <h1>Edit Profile</h1>
      </div>
      {/* <label htmlFor="profile-picture-input">Profile Picture</label>
        <img src={profile.photo} alt="" />
        <input
        type="file"
        name="profilePicture"
        placeholder={profile.photo}
        onChange={handleChangeProfilePicture}
      /> */}
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        {photoData.photo ? (
          // Show photo preview and clear button if photo is selected
          <div>
            <div
              className="photo-preview shadow-lg"
              style={{ backgroundImage: `url(${URL.createObjectURL(photoData.photo)})` }}
            />
            <button className="photo-clear-btn" onClick={() => setPhotoData({ photo: '' })}>
              Clear Photo
            </button>
          </div>
        ) : (
          // Show photo selection input if no photo is selected
          <label htmlFor="photo-input" className="photo-selection shadow-lg">
            <ChoseImage className="plus-icon" />
            <input
              type="file"
              id="photo-input"
              name="photo"
              accept="image/*"
              onChange={handleChangeProfilePicture}
            />
          </label>
        )}
        <label htmlFor="name-input">Name</label>
        <input
          type="text"
          name="name"
          placeholder={profile.name}
          value={formData?.name}
          onChange={handleChange}
        />
        <label htmlFor="bio-input">Bio</label>
        <textarea
          className='border-2'
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder={profile.bio}
          required
        ></textarea>
        <button type="submit">Save Changes</button>
      </form>
      <a href="/change-password">Change Password</a>
    </main>
  );
};

export default EditProfile;
