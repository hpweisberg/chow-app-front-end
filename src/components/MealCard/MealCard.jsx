import breakfastImage from '../../assets/BreakfastPic.jpeg';
import lunchImage from '../../assets/LunchPic.jpeg';
import dinnerImage from '../../assets/DinnerPic.jpeg';
import brunchImage from '../../assets/BrunchPic.jpeg';
import snackImage from '../../assets/SnackPic.jpeg';
import drinkImage from '../../assets/DrinkPic.jpeg';
import dessertImage from '../../assets/DessertPic.jpeg';
import otherImage from '../../assets/OtherPic.jpeg';

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

  const mealNames = Object.keys(mealImages);

  if (!posts) {
    return <div>Loading...</div>;
  }

  if (posts.length === 0) {
    return <div>No meal cards yet</div>;
  }

  const mealTypes = [...new Set(posts.map((post) => post.meal))];
  console.log('mealTypes: ', mealTypes)

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
            >
              <h2 className='text-2xl text-white'>{mealType}</h2>
            </div>
          );
        }
        return null;
      })}

      {/* {mealTypes.map((mealType) => {
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
            >
              <h2 className='text-2xl text-white'>{mealType}</h2>
            </div>
          );
        }
        return null;
      })}  */}
    </>
  );
};

export default MealCard;
