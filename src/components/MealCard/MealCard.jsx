import { useState } from 'react';
import breakfastImage from '../../assets/BreakfastPic.jpeg';
import lunchImage from '../../assets/LunchPic.jpeg';
import dinnerImage from '../../assets/DinnerPic.jpeg';
import brunchImage from '../../assets/BrunchPic.jpeg';
import snackImage from '../../assets/SnackPic.jpeg';
import drinkImage from '../../assets/DrinkPic.jpeg';
import dessertImage from '../../assets/DessertPic.jpeg';
import otherImage from '../../assets/OtherPic.jpeg';
import PostCard from '../PostCard/PostCard';

const MealCard = ({ posts }) => {
  const mealImages = {
    breakfast: breakfastImage,
    lunch: lunchImage,
    dinner: dinnerImage,
    brunch: brunchImage,
    snack: snackImage,
    drink: drinkImage,
    dessert: dessertImage,
    other: otherImage,
  };

  const [expandMealType, setExpandMealType] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleMealFilterClick = (mealType) => {
    setFilteredPosts(posts.filter((post) => post.meal === mealType));
    setExpandMealType((prevExpandMealType) => !prevExpandMealType);
  };



  const mealNames = Object.keys(mealImages);

  if (!posts) {
    return <div>Loading...</div>;
  }

  if (posts.length === 0) {
    return <div>No meal cards yet</div>;
  }

  const mealTypes = Array.isArray(posts) ? [...new Set(posts.map((post) => post.meal))] : [];

  if (!Array.isArray(posts) || posts.length === 0) {
    // Handle the case when posts is not an array or has a length of 0
    return <p>Follow your friends to see their posts.</p>;
  }

  return (
    <>
      {expandMealType && (
        <>
          <div
            key={filteredPosts[0].meal}
            className={`flex items-center justify-center w-full h-24 mb-1 postCard`}
            style={{
              backgroundImage: `url(${mealImages[filteredPosts[0].meal]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={() => handleMealFilterClick(filteredPosts[0].meal)}
          >
            <h2 className='text-2xl text-white'>{filteredPosts[0].meal}</h2>
          </div>
          {filteredPosts?.map((post, index) => (
            <div key={post._id}>
              <PostCard post={post} isLast={index === filteredPosts.length - 1} />
            </div>
          ))}
        </>
      )}
      {!expandMealType &&
        mealTypes?.map((mealType, index) => {
          if (mealNames.includes(mealType)) {
            const imageUrl = mealImages[mealType];

            return (
              <div
                key={mealType}
                className={`flex items-center justify-center w-full h-24 mb-1 postCard ${
                  index === mealTypes.length - 1 ? 'mb-20' : ''
                }`}
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                onClick={() => handleMealFilterClick(mealType)}
              >
                <h2 className='text-2xl text-white'>{mealType}</h2>
              </div>
            );
          }
          return null;
        })}
    </>
  );
};


export default MealCard;
