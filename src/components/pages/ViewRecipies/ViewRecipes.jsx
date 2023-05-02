import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleRecipe from '../SingleRecipe/SingleRecipe';
import { FaBeer } from 'react-icons/fa';

const ViewRecipes = () => {
    const chef = useLoaderData();
    console.log(chef)
    const { experience, likes, name, picture, recipes, id, description } = chef;
    return (
        <div className='w-full max-w-7xl mx-auto'>
            <div className="card lg:card-side bg-base-100 shadow-xl border gap-10 my-10">
                <figure><img src={picture} alt="Album" /></figure>
                <div className="text-white my-10">
                    <h2 className="font-bold text-3xl">{name}</h2>
                    <p className='my-3'><span className='font-bold underline'>Experience:</span> {experience} years</p>
                    <p><span className='font-bold underline'>Likes:</span> {likes}</p>
                    <p className='my-3'><span className='font-bold underline'>Description: </span>{description}</p>
                </div>
            </div>
            <h1 className='text-center text-white text-4xl my-10'>Find {name}'s recipe</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 my-20'>

                {
                    recipes.map(recipe => <SingleRecipe key={recipe.name} recipe={recipe}></SingleRecipe>)
                }
            </div>
        </div>
    );
};

export default ViewRecipes;