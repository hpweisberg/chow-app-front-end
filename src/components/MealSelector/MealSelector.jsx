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
  const [meals] = useState([
    { id: 'breakfast', label: 'Breakfast', icon: Breakfast },
    { id: 'lunch', label: 'Lunch', icon: Lunch },
    { id: 'dinner', label: 'Dinner', icon: Dinner },
    { id: 'snack', label: 'Snack', icon: Snack },
    { id: 'dessert', label: 'Dessert', icon: Dessert },
    { id: 'drink', label: 'Drink', icon: Drink },
    { id: 'brunch', label: 'Brunch', icon: Brunch },
    { id: 'other', label: 'Other', icon: Other },
  ]);

  const handleMealClick = (mealId) => {
    onSelectMeal(mealId);
    console.log(mealId)
  };

  return (
    <div className="grid grid-cols-2">
      {meals.map((meal) => {
        const Icon = meal.icon;
        return (
          <div
            key={meal.id}
            className={`mealCard ${selectedMeal === meal.id ? 'selectedMealCard' : ''}`}
            onClick={() => handleMealClick(meal.id)}
          >
            {Icon && (
              <Icon
                className={`mealIcon ${selectedMeal === meal.id ? 'selectedMealIcon' : ''}`}
                fill={meal.id === selectedMeal ? 'blue' : '#AAAAAA'}

              />
            )}
            <span>{meal.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MealSelector;
