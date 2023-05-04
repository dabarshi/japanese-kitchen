import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefBanner from './ChefBanner';
import RecipeCard from './RecipeCard';

const SingleChef = () => {
    const singleChefData = useLoaderData();

    const { recipes } = singleChefData;
    console.log(singleChefData);
    return (
        <div>
            <ChefBanner chef={singleChefData}></ChefBanner>
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