import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as postService from '../../services/postService';
import { Back } from '../../components/Icons/Icons';

import Rating from '../../components/Rating/Rating';
import MealSelector from '../../components/MealSelector/MealSelector';

import RestaurantSearch from '../../components/RestaurantSearch/RestaurantSearch';
import { LoadScript } from '@react-google-maps/api'
import { ChoseImage } from '../../components/Icons/Icons';



const NewPost = ({ user, handleShowProfile }) => {
  const navigate = useNavigate();
  const [isCreatingPost, setIsCreatingPost] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    photo: '',
    meal: '',
    review: '',
    title: '',
    rating: null,
    description: '',
    restaurant: {
      placeId: '',
      restaurantName: '',
      lat: null,
      lng: null,
    }
  });

  console.log('newpost FD restaurant: ', formData.restaurant)
  console.log('newpost FD: ', formData)



  const handleRestaurantData = useCallback((data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      restaurant: {
        ...prevFormData.restaurant,
        ...data,
      },
    }));
  }, []);


  const [photoData, setPhotoData] = useState({});

  const handleChangePhoto = (evt) => {
    setPhotoData({ photo: evt.target.files[0] });
  };


  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsCreatingPost(true);
      const createdPost = await postService.createPost(formData, photoData.photo);
      setIsCreatingPost(false);
      navigate(`/${user.handle}`);
      handleShowProfile(user)
      console.log(createdPost);
    } catch (err) {
      console.log(err);
      setIsCreatingPost(false);
    }
  };


  const handleNumClick = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSelectMeal = (meal) => {
    setFormData({ ...formData, meal });
  };


  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <main>
      <div className="flex items-center mb-4 mt-20">
        <Back onClick={handleBack} className="w-4 h-4 ml-4 mr-2" />
        <h1 className="text-2xl font-bold mb-0">New Post</h1>
      </div>
      <article className="max-w-lg p-4 pt-1 mx-auto bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

          <div className='flex gap-1 justify-center'>
            {photoData.photo ? (
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
              <label htmlFor="photo-input" className="photo-selection shadow-lg">
                <ChoseImage className="plus-icon" />
                <input
                  type="file"
                  id="photo-input"
                  name="photo"
                  accept="image/*"
                  onChange={handleChangePhoto}
                />
              </label>
            )}

            {/* <input type="file" name="photo" onChange={handleChangePhoto} className='mealCard' /> */}
            <MealSelector selectedMeal={formData.meal} onSelectMeal={handleSelectMeal} />
          </div>
          <div className='flex flex-col gap-4 items-center'>

            <RestaurantSearch handleRestaurantData={handleRestaurantData} />

            <input
              required
              type="text"
              name="name"
              placeholder="What did you eat?"
              autoComplete='off'
              value={formData.name}
              onChange={handleChange}
              className='m-0'
            />
          </div>
          <div className='flex flex-col items-center'>

            <label htmlFor="raiting-input">Rating</label>
            <Rating rating={formData.rating} handleNumClick={handleNumClick} />
          </div>

          <textarea
            type="text"
            name="review"
            placeholder="Review"
            value={formData.review}
            onChange={handleChange}
            className='border-2 border-gray-300 p-2 w-full'
          />

          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline mb-20"
            disabled={isCreatingPost}
            type="submit">
            {isCreatingPost ? 'Creating...' : 'Submit'}
          </button>
        </form>

      </article>
    </main>
  );
};

export default NewPost;
