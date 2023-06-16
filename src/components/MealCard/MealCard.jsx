import breakfastImage from '../../assets/BreakfastPic.jpeg';
import lunchImage from '../../assets/LunchPic.jpeg';
import dinnerImage from '../../assets/DinnerPic.jpeg';

const MealCard = (props) => {
  const getImage = (mealName) => {
    const imageMap = {
      Breakfast: breakfastImage,
      Lunch: lunchImage,
      Dinner: dinnerImage
    };

    if (mealName in imageMap) {
      return imageMap[mealName];
    }
  };

  const imageUrl = getImage(props.mealName);

  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='flex items-center justify-center w-full h-24 mb-1 postCard' style={cardStyle}>
      <h2 className="text-2xl text-white">{props.mealName}</h2>
    </div>
  );
};

export default MealCard;
