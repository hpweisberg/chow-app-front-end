import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as postService from '../../services/postService';
import { Back } from '../../components/Icons/Icons';

import Rating from '../../components/Rating/Rating';
import MealSelector from '../../components/MealSelector/MealSelector';
// import PlacesAutocomplete from '../../components/PlacesAutocomplete/PlacesAutocomplete';
import RestaurantSearch from '../../components/RestaurantSearch/RestaurantSearch';
import { LoadScript } from '@react-google-maps/api'



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

  // const [restaurantData, setRestaurantData] = useState({
  //   place_id: '',
  //   restaurantName: '',
  //   lat: null,
  //   lng: null,
  //   phoneNum: null,
  //   website: '',
  // })

  // console.log('newpost RD: ', restaurantData)
  console.log('newpost FD restaurant: ', formData.restaurant)
  console.log('newpost FD: ', formData)
  // console.log('resturant name: ', formData.restaurant.restaurantName)
  // console.log('place_id: ', formData.restaurant.place_id)
  // console.log('lat: ', formData.restaurant.lat)
  // console.log('lng: ', formData.restaurant.lng)


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
          {/* <LoadScript> */}

            <RestaurantSearch handleRestaurantData={handleRestaurantData} />
          {/* </LoadScript> */}
          <label htmlFor="name-input">Name</label>
          <input
            required
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="name-input">Photo</label>
          <input type="file" name="photo" onChange={handleChangePhoto} />
          <label htmlFor="meal-input">Meal</label>
          <MealSelector selectedMeal={formData.meal} onSelectMeal={handleSelectMeal} />
          <label htmlFor="raiting-input">Rating</label>
          <Rating rating={formData.rating} handleNumClick={handleNumClick} />
          {/* <label htmlFor="title-input">Title</label> */}
          {/* <input
            required
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          /> */}
          <label htmlFor="review-input">Review</label>
          <input
            type="text"
            name="review"
            placeholder="review"
            value={formData.review}
            onChange={handleChange}
          />
          {/* <label htmlFor="description-input">Description</label>
          <input
            required
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          /> */}
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline mb-20"
            type="submit">Submit</button>
        </form>
        {/* <h3 className='text-center text-white bg-red-500 p-14'>Add Restaurant picker</h3> */}
      </article>
    </main>
  );
};

export default NewPost;
