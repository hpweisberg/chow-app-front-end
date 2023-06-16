import { Map, Rows, Meal } from "../../components/Icons/Icons";
import { useState } from 'react';

const PostIconNav = () => {
  const [activeOption, setActiveOption] = useState('rows');

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="flex items-center w-full py-4 justify-evenly">
      <div className='w-10 h-10' onClick={() => handleOptionClick('rows')}>
        <Rows className={`w-full h-full ${activeOption === 'rows' ? 'active' : ''}`} />
      </div>
      <div className='w-10 h-10' onClick={() => handleOptionClick('meal')}>
        <Meal className={`w-full h-full ${activeOption === 'meal' ? 'active' : ''}`} />
      </div>
      <div className='w-10 h-10' onClick={() => handleOptionClick('map')}>
        <Map className={`w-full h-full ${activeOption === 'map' ? 'active' : ''}`} />
      </div>
    </div>
  );
};

export default PostIconNav;
