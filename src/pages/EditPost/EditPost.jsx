import { useState, useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackBtn from '../../components/BackBtn/BackBtn';
import Rating from '../../components/Rating/Rating';
import MealSelector from '../../components/MealSelector/MealSelector';
import RestaurantSearch from '../../components/RestaurantSearch/RestaurantSearch';
import { ChoseImage } from '../../components/Icons/Icons';

const EditPost = ({ handleUpdatePost, userProfile }) => {
  const { state } = useLocation();
  const [formData, setFormData] = useState(state);
  const navigate = useNavigate();
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [photoPreview, setPhotoPreview] = useState(formData.photo);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  console.log('formData: ', formData)


  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // console.log('submited: ', formData)
      formData.author = userProfile.handle
      handleUpdatePost(formData);
      navigate(`/posts/${formData._id}`);
    } catch (error) {
      console.log('Error:', error);

    }
  };

  const handleChangePhoto = (evt) => {
    const selectedPhoto = evt.target.files[0];

    if (formData.photo) {
      URL.revokeObjectURL(formData.photo);
    }
    if (selectedPhoto) {
      setFormData({ ...formData, photo: selectedPhoto });
      setPhotoPreview(URL.createObjectURL(selectedPhoto));

      // if (selectedPhoto) {
      //   const reader = new FileReader();
      //   reader.onloadend = () => {
      //     setSelectedPhoto(selectedPhoto);
      //     setPhotoPreview(reader.result);
      //   };
      //   reader.readAsDataURL(selectedPhoto);
      // } else {
      //   setSelectedPhoto(null);
      //   setPhotoPreview(null);
    }
  };

  const handleClearPhoto = () => {
    setSelectedPhoto(null);
    setPhotoPreview(null);
    setFormData({ ...formData, photo: null }); // Clear the photo in the form data
  };


  const handleNumClick = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSelectMeal = (meal) => {
    setFormData({ ...formData, meal });
  };

  const handleRestaurantData = useCallback((data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      restaurant: {
        ...prevFormData.restaurant,
        ...data,
      },
    }));
  }, []);

  useEffect(() => {
    setSelectedPhoto(formData.photo || null); // Set selectedPhoto to the current photo in formData, or null if none exists
    setPhotoPreview(formData.photo ? <img src={formData.photo} alt='' /> : null);
  }, [formData.photo]);


  return (
    <main className='mt-20'>
      <div className='flex '>
        <BackBtn />
        <h1>Edit Post</h1>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

        <div className='flex gap-1 justify-center'>
          {selectedPhoto || photoPreview ? (
            <div>
              <div
                className="photo-preview shadow-lg"
                style={{
                  backgroundImage: `url(${photoPreview || URL.createObjectURL(selectedPhoto)})`,
                  backgroundSize: 'cover',
                }}
              />
              <button className="photo-clear-btn" onClick={handleClearPhoto}>
                Clear Photo
              </button>
            </div>
          ) : (
            <label htmlFor="photo-input" className="photo-selection shadow-lg">
              <ChoseImage className="plus-icon" />
              <input
                type="file"
                id="photo-input"
                name="photo"
                accept="image/*"
                onChange={handleChangePhoto}
                required
              />
            </label>
          )}
          <MealSelector selectedMeal={formData.meal} onSelectMeal={handleSelectMeal} required />
        </div>


        <div className='flex flex-col gap-4 items-center'>

          <RestaurantSearch handleRestaurantData={handleRestaurantData} required />

          <div className='relative w-[100%]'>
            <input
              required
              type="text"
              name="name"
              placeholder="What did you eat?"
              autoComplete='off'
              value={formData.name}
              onChange={handleChange}
              className='
      p-0 w-full m-1 placeholder:text-sm peer border-b-2 border-gray-300 dark:border-gray-900 text-gray-900 dark:text-gray-200 focus:border-rose-600 focus:outline-none mx-auto placeholder-transparent
dark:bg-dark-background-200/50'
            />
            <label htmlFor="name" className=' absolute left-[8px] -top-3 dark:text-dark-txt-100 text-xs peer-placeholder-shown:text-sm
peer-placeholder-shown:text-gray-400
peer-placeholder-shown:dark:gray-200
peer-placeholder-shown:top-3
peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-700
peer-focus:dark:text-dark-txt-100  transition-all
'
            >Meal Name</label>
          </div>
        </div>
        <div className='flex flex-col items-center mb-2'>

          <label htmlFor="raiting-input" className='text-light-txt-100 dark:text-dark-txt-100'>Rating</label>
          <Rating rating={formData.rating} handleNumClick={handleNumClick} required />
        </div>

        <div className='relative w-[100%]'>

          <textarea
            type="text"
            name="review"
            placeholder="Review"
            value={formData.review}
            onChange={handleChange}
            className='p-2 w-full m-1 placeholder:text-sm peer border-b-2 border-gray-300 dark:border-gray-900 text-gray-900 dark:text-gray-200 focus:border-rose-600 focus:outline-none mx-auto placeholder-transparent
dark:bg-dark-background-200/50 h-32'
          // className='border-2 border-gray-300 p-2 w-full h-32'
          />
          <label htmlFor="review" className=' absolute left-[8px] -top-3 dark:text-dark-txt-100 text-xs peer-placeholder-shown:text-sm
peer-placeholder-shown:text-gray-400
peer-placeholder-shown:dark:gray-200
peer-placeholder-shown:top-3
peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-700
peer-focus:dark:text-dark-txt-100  transition-all
'>Review</label>
        </div>

        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline mb-20"
          disabled={isCreatingPost}
          type="submit">
          {isCreatingPost ? 'Creating...' : 'Submit'}
        </button>
      </form>
    </main>
  );
}

export default EditPost;