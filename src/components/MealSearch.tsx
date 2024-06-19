import React, { useState } from 'react';
import axios from 'axios';
import MealCard from './MealCard';

interface Meal {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strMealThumb: string;
}

const MealSearch: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [meals, setMeals] = useState<Meal[]>([]);

    const handleSearch = () => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then(response => {
                setMeals(response.data.meals);
            });
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                onKeyPress={e => { if (e.key === 'Enter') handleSearch(); }}
            />
            <button onClick={handleSearch}>Search</button>
            <div>
                {meals && meals.map(meal => (
                    <MealCard key={meal.idMeal} meal={meal} />
                ))}
            </div>
        </div>
    );
};

export default MealSearch;
