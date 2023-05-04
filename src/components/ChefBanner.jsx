import React from 'react';

const ChefBanner = ({chef}) => {
    const {name, picture, bio, likes, numberOfRecipes, experience} = chef;
    return (
        <div className="hero bg-red-100">
            <div className="hero-content flex-col lg:flex-row">
                <img src={picture} className="md:max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-4">{bio}</p>   
                    <div className="badge badge-secondary">Likes : {likes}</div>
                    <div className="badge badge-secondary mx-2">{numberOfRecipes} recipes</div>
                    <div className="badge badge-secondary mx-2">{experience} years of experience</div>
                </div>
            </div>
        </div>
    );
};

export default ChefBanner;