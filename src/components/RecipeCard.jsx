import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    const { recipeName, ingredients, method, rating } = recipe;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            {/* <figure><img src={picture} alt="Shoes" /></figure> */}
            <div className="card-body">
                <h2 className="card-title">{recipeName}</h2>
                <p>Ingredients : {ingredients}</p>
                <p>Methods : {method}</p>
                <p>Ratings : {rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Recipes</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;