import { PlateRating } from '../Icons/Icons';

const Rating = ({ rating, handleNumClick }) => {
  return (
    <div className='flex gap-2'>
      {[1, 2, 3, 4, 5].map((num) => (
        <PlateRating
          key={num}
          className={num <= rating ? 'numActive' : 'num'}
          fill={num <= rating ? '#f87171' : '#AAAAAA'}
          onClick={() => handleNumClick(num)}
        />
      ))}
    </div>
  );
};

export default Rating;
