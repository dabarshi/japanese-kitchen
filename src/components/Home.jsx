import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';
import UserReview from './UserReview';




const Home = () => {

    const chefsData = useLoaderData();

    return (
        <div>
            {/* Home Page Banner Section */}
            <Banner></Banner>

            {/* Home page chef section */}

            <div className='my-8'>
                <h1 className='text-center text-3xl font-bold my-8'>Available Chefs</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 max-w-7xl mx-auto my-8 place-items-center'>
                    {
                        chefsData.map(chef => <ChefCard
                            key={chef.id}
                            chef={chef}
                        ></ChefCard>)
                    }
                </div>
            </div>

            {/* A text section about page */}

            <div className='bg-base-100 md:mx-32 my-4 p-4'>
                <h1 className='text-3xl font-semibold my-4'>Japanese Kitchen</h1>
                <p>Started as an online cookbook where professional Chefs share their favorite recipes, Japanes kitchen has become a valuable resource for professional chef recipes, professional cooking advice, and news from the culinary industry. In addition to recipes, our featured Chefs also share culinary techniques, advice on cooking materials, and lots of tips for home cooks.</p>
                <h1 className='text-3xl font-semibold my-4'>Tried and Tested Chef Recipes</h1>
                <p>Japanes kitchen only features recipes from professional Chefs and so all our recipes are tried and tested.  Take a look at our most popular recipes or check out the latest dishes we’ve added to the site.</p>
                <h1 className='text-3xl font-semibold my-4'>Meet Our Chefs</h1>
                <p>Need some help deciding what to choose? Take a look at our most popular recipes or check out the latest dishes we’ve added to the site.</p>
            </div>

            {/* User Review section */}
            <div>
                <UserReview></UserReview>
            </div>
        </div>
    );
};

export default Home;