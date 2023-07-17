import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as postService from '../../services/postService';
import { Back } from '../../components/Icons/Icons';

import Rating from '../../components/Rating/Rating';
import MealSelector from '../../components/MealSelector/MealSelector';

import RestaurantSearch from '../../components/RestaurantSearch/RestaurantSearch';
import { LoadScript } from '@react-google-maps/api'
import { ChoseImage } from '../../components/Icons/Icons';



const NewPost = () => {
  const navigate = useNavigate();

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
      const createdPost = await postService.createPost(formData, photoData.photo);
      // const addPhoto = await postService.addPhoto(createdPost._id, photoData);
      navigate('/');
      console.log(createdPost); // You can now use the createdPost object as needed
    } catch (err) {
      console.log(err);
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
        <h1 className="text-2xl font-bold">New Post</h1>
      </div>
      <article className="max-w-lg p-4 pt-1 mx-auto bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

          <div className='flex'>
            <input type="file" name="photo" onChange={handleChangePhoto} className='mealCard' />
            <MealSelector selectedMeal={formData.meal} onSelectMeal={handleSelectMeal} />
          </div>
          <RestaurantSearch handleRestaurantData={handleRestaurantData} />

          <input
            required
            type="text"
            name="name"
            placeholder="What did you eat?"
            autoComplete='off'
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="raiting-input">Rating</label>
          <Rating rating={formData.rating} handleNumClick={handleNumClick} />

          <textarea
            type="text"
            name="review"
            placeholder="Review"
            value={formData.review}
            onChange={handleChange}
            className='border-2 border-gray-300 p-2 w-full'
          />

          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline mb-20"
            type="submit">Submit</button>
        </form>

      </article>
    </main>
  );
};

export default NewPost;
