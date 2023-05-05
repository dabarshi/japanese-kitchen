import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefBanner from './ChefBanner';
import RecipeCard from './RecipeCard';

const SingleChef = () => {
    const singleChefData = useLoaderData();

    const { recipes } = singleChefData;


    return (
        <div>
        {/* Chefs banner section */}
            <ChefBanner chef={singleChefData}></ChefBanner>

            {/* display Recipes section */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 max-w-7xl mx-auto my-8'>
                {
                    recipes.map(recipe => <RecipeCard
                        key={recipe.recipeName}
                        recipe={recipe}
                    ></RecipeCard>)

                }
            </div>

        </div>
    );
};

export default SingleChef;