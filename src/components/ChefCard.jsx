import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {

    const { id, name, picture, experience, likes, numberOfRecipes } = chef;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Experience : {experience} Years</p>
                <p>Number of recipes : {numberOfRecipes}</p>
                <p>Likes : {likes}</p>
                <div className="card-actions justify-end">
                    <Link to={`/chef/${id}`}>
                        <button className="btn btn-primary">View Recipes</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ChefCard;