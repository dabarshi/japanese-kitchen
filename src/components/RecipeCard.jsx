import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    const { recipeName, ingredients, method, rating , imgURL} = recipe;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-40 p-4' src={imgURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{recipeName}</h2>
                <p>Ingredients :</p>
                {
                    ingredients.map((ingredient, index) => <li className='px-4' key={index}>{ingredient}</li>)
                }
                <p>Methods : {method}</p>
                <p>Ratings : {rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;