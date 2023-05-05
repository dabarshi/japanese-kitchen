import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import ChefBanner from './ChefBanner';
import RecipeCard from './RecipeCard';
import { ThreeCircles } from 'react-loader-spinner';

const SingleChef = () => {
    const singleChefData = useLoaderData();

    const { recipes } = singleChefData;

    const navigation = useNavigation();


    return (
        <div>
            {navigation.state === "loading" && <div className='w-screen h-36 grid place-items-center'><ThreeCircles
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            /></div>}

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