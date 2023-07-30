import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackBtn from '../../components/BackBtn/BackBtn';
// import * as profileService from '../../services/profileService';
import { ChoseImage } from '../../components/Icons/Icons';
import { Switch } from '@headlessui/react';


const EditProfile = ({ user, profile, handleUpdateProfile, handleUpdateProfilePhoto, updateProfileAfterChange }) => {
  const { state } = useLocation();
  const [formData, setFormData] = useState(state);
  const navigate = useNavigate();
  const [photoPreview, setPhotoPreview] = useState(formData.photo);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [publicProfile, setPublicProfile] = useState(formData.followPublic);

  // console.log(formData.photo)
  // console.log(profile.followPublic)
  console.log(publicProfile)
  console.log('fd:', formData)

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedPhoto instanceof File) {
        await handleUpdateProfilePhoto(user.handle, selectedPhoto);
      }
  
      const updatedProfileData = { ...profile, ...formData };
      updatedProfileData.followPublic = publicProfile; // Update the followPublic key with the current value of the publicProfile state
      const updatedProfile = await handleUpdateProfile(updatedProfileData);
      await updateProfileAfterChange(updatedProfile);
      console.log('updatedProfile: ', updatedProfile);
      navigate(`/${user.handle}`);
    } catch (error) {
      console.log('Error:', error);
      // Handle any error state here if needed
    }
  };
  

  const handleChangeProfilePicture = (evt) => {
    const selectedPhoto = evt.target.files[0];

    if (formData.photo) {
      URL.revokeObjectURL(formData.photo);
    }
    if (selectedPhoto) {
      setSelectedPhoto(selectedPhoto); // Store the file object in selectedPhoto state
      setFormData({ ...formData, photo: selectedPhoto }); // Store the file object in the formData state
      setPhotoPreview(URL.createObjectURL(selectedPhoto));
    }
  };
  // const handleChangeProfilePicture = (evt) => {
  //   setPhotoData({ photo: evt.target.files[0] });
  // };

  const handleClearPhoto = () => {
    setSelectedPhoto(null);
    setPhotoPreview(null);
    setFormData({ ...formData, photo: null }); // Clear the photo in the form data
  };

  useEffect(() => {
    setSelectedPhoto(formData.photo || null); // Set selectedPhoto to the current photo in formData, or null if none exists
    setPhotoPreview(formData.photo ? <img src={formData.photo} alt='' /> : null);
  }, [formData.photo]);

  const handleChangePublicProfile = () => {
    setPublicProfile((prevPublicProfile) => !prevPublicProfile); // Toggle the publicProfile state
    setFormData({ ...formData, followPublic: !publicProfile }); // Toggle the publicProfile value in the formData
  
  };

  useEffect(() => {
    // Set the publicProfile state to match the profile's publicProfile value
    setPublicProfile(formData.publicProfile || false);
  }, [formData.publicProfile]);


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
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-3 container'>
        <div className='flex gap-4'>

          {photoPreview ? (
            // Show photo preview and clear button if photo is selected
            <div>
              <div
                className="photo-preview shadow-lg"
                style={{
                  backgroundImage: `url(${photoPreview || URL.createObjectURL(selectedPhoto)})`
                }}
              />
              <button className="photo-clear-btn" onClick={handleClearPhoto}>
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
          <div>
          <p>Profile: {publicProfile ? 'Public' : 'Private'}</p>
            {profile.followPublic}
            <Switch
  checked={publicProfile}
  onChange={handleChangePublicProfile} // Wrap in an arrow function
  className={`${publicProfile ? 'bg-blue-600' : 'bg-gray-200'
    } relative inline-flex h-5 w-20 items-center rounded-full`}
>
  <span className="sr-only">Enable dark mode</span>
  <span
    className={`${publicProfile ? 'translate-x-6' : 'translate-x-1'
      } inline-block h-4 w-4 transform rounded-full bg-red-400 transition`}
  />
</Switch>


          </div>
        </div>
        <div className='relative w-full'>

          <input
            type="text"
            name="name"
            placeholder={profile.name}
            value={formData?.name}
            onChange={handleChange}
            className='
      p-0 w-full m-1 placeholder:text-sm peer border-b-2 border-gray-300 dark:border-gray-900 text-gray-900 dark:text-gray-200 focus:border-rose-600 focus:outline-none mx-auto placeholder-transparent
dark:bg-dark-background-200/50'
          />
          <label htmlFor="name" className='absolute left-[8px] -top-3  dark:text-dark-txt-100 text-xs peer-placeholder-shown:text-sm
peer-placeholder-shown:text-gray-400
peer-placeholder-shown:dark:gray-200
peer-placeholder-shown:top-3
peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-700
peer-focus:dark:text-dark-txt-100  transition-all
'>Name</label>
        </div>
        {/* <label htmlFor="bio-input">Bio</label> */}
        <div className='relative w-full'>

          <textarea
            className='p-2 w-full m-1 placeholder:text-sm peer border-b-2 border-gray-300 dark:border-gray-900 text-gray-900 dark:text-gray-200 focus:border-rose-600 focus:outline-none mx-auto
          dark:bg-dark-background-200/50 h-32'
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder='bio'
            required
          ></textarea>
          <label htmlFor="bio" className=' absolute left-[8px] -top-3 dark:text-dark-txt-100 text-xs peer-placeholder-shown:text-sm
peer-placeholder-shown:text-gray-400
peer-placeholder-shown:dark:gray-200
peer-placeholder-shown:top-3
peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-700
peer-focus:dark:text-dark-txt-100  transition-all
'>Bio</label>
        </div>
        <button type="submit">Save Changes</button>
      </form>
      <a href="/change-password">Change Password</a>
    </main>
  );
};

export default EditProfile;
