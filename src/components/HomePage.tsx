import React from 'react';
import MealsDay from "./MealsDay";
import MealSearch from "./MealSearch";

const HomePage: React.FC = () => {
    return (
        <div>
            <MealsDay/>
            <MealSearch/>
        </div>
    );
};

export default HomePage;