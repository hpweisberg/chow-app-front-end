import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as postService from '../../services/postService';
import { Back, PlateRating } from '../../components/Icons/Icons';

import Rating from '../../components/Rating/Rating';
import MealSelector from '../../components/MealSelector/MealSelector';




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
  });
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
      await postService.createPost(formData, photoData.photo);
      navigate('/');
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
      <div className="flex items-center mb-4">
        <Back onClick={handleBack} className="w-4 h-4 ml-4 mr-2" />
        <h1 className="text-2xl font-bold">New Post</h1>
      </div>
      <article className="max-w-lg p-4 pt-1 mx-auto bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
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
          {/* <select required name="meal" value={formData.meal} onChange={handleChange}>
            <option value="">Select a meal</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
            <option value="Dessert">Dessert</option>
            <option value="Drink">Drink</option>
            <option value="Brunch">Brunch</option>
            <option value="Other">Other</option>
          </select> */}
          <label htmlFor="review-input">Review</label>
          <Rating rating={formData.rating} handleNumClick={handleNumClick} />

          {/* <div>
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                className={num <= formData.rating ? 'num-active' : 'num'}
                onClick={() => handleNumClick(num)}
              ></span>
            ))}
          </div> */}
          <label htmlFor="title-input">Title</label>
          <input
            required
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          />
          <label htmlFor="review-input">Review</label>
          <input
            type="text"
            name="review"
            placeholder="review"
            value={formData.review}
            onChange={handleChange}
          />
          <label htmlFor="description-input">Description</label>
          <input
            required
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h3>Add Restaurant picker</h3>
      </article>
    </main>
  );
};

export default NewPost;
