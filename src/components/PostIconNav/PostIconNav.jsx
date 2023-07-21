import { Map, Rows, Meal } from "../../components/Icons/Icons";
import { useState } from 'react';

const PostIconNav = ({ handleSort }) => {
  const [activeOption, setActiveOption] = useState('rows');

  const handleOptionClick = (sort) => {
    setActiveOption(sort);
    handleSort(sort);
  };

  return (
    <div className="flex container items-center w-full py-2 justify-evenly border-b-4">
      <div className={`w-10 h-10 ${activeOption === 'rows' ? 'active' : ''}`} onClick={() => handleOptionClick('rows')}>
        <Rows className="w-full h-full" />
      </div>
      <div className={`w-10 h-10 ${activeOption === 'meals' ? 'active' : ''}`} onClick={() => handleOptionClick('meals')}>
        <Meal className="w-full h-full" />
      </div>
      <div className={`w-10 h-10 ${activeOption === 'map' ? 'active' : ''}`} onClick={() => handleOptionClick('map')}>
        <Map className="w-full h-full" />
      </div>
    </div>
  );
};

export default PostIconNav;
