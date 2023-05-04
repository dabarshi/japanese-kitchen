import React, { useContext } from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';




const Home = () => {
    const chefsData = useLoaderData();
    console.log(chefsData);

    return (
        <div>
            <Banner></Banner>
            <div>
                <h1 className='text-center text-3xl font-bold my-8'>Available Chefs</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 max-w-7xl mx-auto my-8'>
            {
                chefsData.map(chef => <ChefCard
                key={chef.id}
                chef={chef}
                ></ChefCard>)
            }              
            </div>
            </div>
        </div>
    );
};

export default Home;