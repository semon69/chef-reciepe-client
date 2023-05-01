import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleRecipe from '../SingleRecipe/SingleRecipe';

const ViewRecipes = () => {
    const chef = useLoaderData();
    console.log(chef)
    const { experience, likes, name, picture, recipes, id, description } = chef;
    return (
        <div className='w-full max-w-7xl mx-auto'>
            <div className="card lg:card-side bg-base-100 shadow-xl border">
                <figure><img src={picture} alt="Album" /></figure>
                <div className="">
                    <h2 className="card-title">{name}</h2>
                    <p>{experience}</p>
                    <p>{likes}</p>
                    <p>{description}</p>
                </div>
            </div>
            <div className='grid grid-cols-3 my-20'>
                {
                    recipes.map(recipe => <SingleRecipe key={recipe.name} recipe={recipe}></SingleRecipe>)
                }
            </div>
        </div>
    );
};

export default ViewRecipes;