import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditPost = (props) => {
  const { state } = useLocation();
  const [formData, setFormData] = useState(state);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleUpdatePost(formData);
    navigate(`/posts/${formData._id}`)
  };

  const handleChangePhoto = (evt) => {
    setFormData({ ...formData, photo: evt.target.files[0] });
  };

  return ( 
    <main>
    <h1>Edit Post</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name-input">Name</label>
      <input
        required
        type='text'
        name='name'
        value={formData?.name}
        onChange={handleChange}
      />
      <label htmlFor="photo-input">Photo</label>
      <input
        type='file'
        name='photo'
        onChange={handleChangePhoto}
      />
      <label htmlFor="meal-input">Meal</label>
      <select
        required
        name='meal'
        value={formData?.meal}
        onChange={handleChange}
      >
        <option value=''>Select a meal</option>
        <option value='Breakfast'>Breakfast</option>
        <option value='Lunch'>Lunch</option>
        <option value='Dinner'>Dinner</option>
        <option value='Snack'>Snack</option>
        <option value='Dessert'>Dessert</option>
        <option value='Drink'>Drink</option>
        <option value='Brunch'>Brunch</option>
        <option value='Other'>Other</option>
      </select>
      <label htmlFor="review-input">Review</label>
      <div>
        {[1, 2, 3, 4, 5].map(num => (
          <span key={num}
            className={num <= formData?.rating ? 'num-active' : 'num'}
            onClick={() => handleNumClick(num)}
          >
          </span>
        ))}
      </div>
      <label htmlFor="title-input">Title</label>
      <input
        required
        type='text'
        name='title'
        value={formData?.title}
        onChange={handleChange}
      />
      <label htmlFor="review-input">Review</label>
      <input
        type='text'
        name='review'
        value={formData?.review}
        onChange={handleChange}
      />
      <label htmlFor="description-input">Description</label>
      <input
        required
        type='text'
        name='description'
        value={formData?.description}
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
    </form>
    <h3>Add Resturant picker</h3>
  </main>
  );
}

export default EditPost;