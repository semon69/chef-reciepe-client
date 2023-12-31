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
            <div className="card lg:card-side bg-base-100 shadow-xl border gap-10 my-10 mx-6">
                <figure><img src={picture} alt="Album" /></figure>
                <div className="text-white my-10 p-5">
                    <h2 className="font-bold text-3xl">{name}</h2>
                    <p className='my-3'><span className='font-bold'>Experience: </span> {experience} years</p>
                    <p><span className='font-bold'>Likes:</span> {likes}</p>
                    <p className='my-3'><span className='font-bold'>Description:  </span>{description}</p>
                    <p className='my-3'><span className='font-bold'>Number of Recipe:  </span>{recipes.length}</p>
                </div>
            </div>
            <h1 className='text-center text-white text-4xl my-10'>Find {name}'s recipe</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 my-20 mx-2'>

                {
                    recipes.map(recipe => <SingleRecipe key={recipe.name} recipe={recipe}></SingleRecipe>)
                }
            </div>
        </div>
    );
};

export default ViewRecipes;