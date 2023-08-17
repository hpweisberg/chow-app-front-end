import { useState } from 'react';
import {
  Breakfast,
  Lunch,
  Dinner,
  Snack,
  Dessert,
  Drink,
  Brunch,
  Other,
} from '../Icons/Icons';

const MealSelector = ({ selectedMeal, onSelectMeal }) => {
  const [isMealOptionsVisible, setIsMealOptionsVisible] = useState(false);

  const handleMealClick = (mealId) => {
    onSelectMeal(mealId);
    setIsMealOptionsVisible(false);
  };

  const toggleMealOptions = () => {
    setIsMealOptionsVisible((prevIsVisible) => !prevIsVisible);
  };

  const mealOptions = [
    { id: 'Breakfast', label: 'Breakfast', icon: Breakfast },
    { id: 'Lunch', label: 'Lunch', icon: Lunch },
    { id: 'Dinner', label: 'Dinner', icon: Dinner },
    { id: 'Snack', label: 'Snack', icon: Snack },
    { id: 'Dessert', label: 'Dessert', icon: Dessert },
    { id: 'Drink', label: 'Drink', icon: Drink },
    { id: 'Brunch', label: 'Brunch', icon: Brunch },
    { id: 'Other', label: 'Other', icon: Other },
  ];

  return (
    <div className="relative">
      <div
        className={`mealCard h-[150px] w-[150px] ${selectedMeal ? 'selectedMealCard' : ''}`}
        onClick={toggleMealOptions}
      >
        {selectedMeal && (
          <div className='flex items-center justify-center flex-col'>
            <span>
              {mealOptions.find((meal) => meal.id === selectedMeal)?.icon({ className: 'meal-type-icon' })}
            </span>
            <span className="text-lg">
              {mealOptions.find((meal) => meal.id === selectedMeal)?.label}
            </span>
          </div>
        )}
        {!selectedMeal && (
          <span className="text-gray-700 dark:text-gray-300  opacity-70">Select Meal</span>
        )}
      </div>
      {isMealOptionsVisible && (
        <div className="absolute top-full left-0 w-full p-2 bg-white border rounded shadow-md z-10 dark:bg-black dark:text-dark-txt-100 dark:border-dark-background-100">
          {mealOptions.map((meal) => {
            const Icon = meal.icon;
            return (
              <div
                key={meal.id}
                className="flex items-center py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleMealClick(meal.id)}
              >
                {Icon && <Icon className="w-5 h-5 mr-2 text-gray-500" />}
                <span>{meal.label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};


export default MealSelector;
