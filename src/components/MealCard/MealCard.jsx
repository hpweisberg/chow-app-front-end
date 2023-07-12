import { useState } from 'react';
import breakfastImage from '../../assets/BreakfastPic.jpeg';
import brunchImage from '../../assets/BrunchPic.jpeg';
import dessertImage from '../../assets/DessertPic.jpeg';
import dinnerImage from '../../assets/DinnerPic.jpeg';
import drinkImage from '../../assets/DrinkPic.jpeg';
import lunchImage from '../../assets/LunchPic.jpeg';
import otherImage from '../../assets/OtherPic.jpeg';
import snackImage from '../../assets/SnackPic.jpeg';
import PostCardNew from '../PostCardNew';


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
    console.log('meal filter clicked: ', filteredPosts);
    setExpandMealType((prevExpandMealType) => !prevExpandMealType);
    console.log('expand selection: ', expandMealType)
  }

  const mealNames = Object.keys(mealImages);

  if (!posts) {
    return <div>Loading...</div>;
  }

  if (posts.length === 0) {
    return <div>No meal cards yet</div>;
  }

  const mealTypes = [...new Set(posts.map((post) => post.meal))];
  console.log('mealTypes: ', mealTypes)

  console.log('filteredPosts3: ', filteredPosts)

  return (
    <>
      {mealTypes.map((mealType) => {
        if (mealNames.includes(mealType)) {
          const imageUrl = mealImages[mealType];

          return (
            <div
              key={mealType}
              className='flex items-center justify-center w-full h-24 mb-1 postCard'
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              onClick={() => handleMealFilterClick(mealType)}
              // onClick={() => handleClick2()}
            >
              <h2 className='text-2xl text-white'>{mealType}</h2>
            </div>
          );
        }
        return null;
      })}
      { expandMealType && filteredPosts.map((post) => 
      <div key={post._id}>
        <PostCardNew post={post}/>
      </div>
      )}
    </>
  );
};

export default MealCard;
