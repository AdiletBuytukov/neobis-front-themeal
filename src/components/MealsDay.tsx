import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

interface Meal {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strMealThumb: string;
}

const MealsDay: React.FC = () => {
    const [meal, setMeal] = useState<Meal | null>(null);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => {
                setMeal(response.data.meals[0]);
            });
    }, []);
    if (!meal) return <div>Wait...</div>;

    return (
        <>
            <div className='meals-block'>
                <div className='meals-title'>
                    <h2>Meal of the Day</h2>
                    <Link to={`/meal/${meal.idMeal}`}><h3>{meal.strMeal}</h3></Link>
                    <div className='meals-category'>
                        <p>{meal.strCategory} | </p>
                        <p>{meal.strArea}</p>
                    </div>
                </div>
                <div className='meals-img'>
                    <img src={meal.strMealThumb} alt={meal.strMeal}/>
                </div>
            </div>

        </>
    );
};

export default MealsDay;
