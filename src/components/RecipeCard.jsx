import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ recipe }) => {
    const [disableButton, setDisableButton] = useState(false);

    const { recipeName, ingredients, method, rating , imgURL} = recipe;

    const toastNotify = () => {
        toast("Added to your favourite recipe.");
        setDisableButton(!disableButton);
    }
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
                    <button onClick={toastNotify} className="btn btn-primary" disabled={disableButton}>Favorite</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;