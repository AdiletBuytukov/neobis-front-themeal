import React from 'react';
import {Link} from 'react-router-dom';

interface MealCardProps {
    meal: {
        idMeal: string;
        strMeal: string;
        strCategory: string;
        strArea: string;
        strMealThumb: string;
    };
}

const MealCard: React.FC<MealCardProps> = ({meal}) => {
    return (
        <div>
            <div>
                <img src={`${meal.strMealThumb}/preview`} alt={meal.strMeal}/>
            </div>
            <Link to={`/meal/${meal.idMeal}`}>
                <div>
                    <h3>{meal.strMeal}</h3>
                    <p>{meal.strCategory} | {meal.strArea}</p>
                </div>
            </Link>

        </div>
    ) ;
};

export default MealCard;
