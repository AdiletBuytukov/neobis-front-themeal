import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface MealInfo {
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    ingredients: { name: string, measure: string }[];
}

const MealInfo: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [meal, setMeal] = useState<MealInfo | null>(null);

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => {
                const mealData = response.data.meals[0];
                const ingredients = Array.from({ length: 99 }, (_, i) => ({
                    name: mealData[`strIngredient${i + 1}`],
                    measure: mealData[`strMeasure${i + 1}`],
                })).filter(ingredient => ingredient.name);
                setMeal({
                    strMeal: mealData.strMeal,
                    strCategory: mealData.strCategory,
                    strArea: mealData.strArea,
                    strInstructions: mealData.strInstructions,
                    strMealThumb: mealData.strMealThumb,
                    ingredients,
                });
            });
    }, [id]);

    if (!meal) return <div>Wait...</div>;

    return (
        <div>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>Category: {meal.strCategory}</p>
            <p>Country: {meal.strArea}</p>
            <h3>Ingredients:</h3>
            <ul>
                {meal.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.name} - {ingredient.measure}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{meal.strInstructions}</p>
        </div>
    );
};

export default MealInfo;