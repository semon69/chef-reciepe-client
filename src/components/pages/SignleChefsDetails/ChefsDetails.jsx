import React from 'react';
import { Link } from 'react-router-dom';

const ChefsDetails = ({chef}) => {
    const {experience, likes, name, picture, recipes, id} = chef;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-10 rounded">
                    <figure><img className='h-64' src={picture} alt="Shoes" /></figure>
                    <div className="card-body bg-white text-black">
                        <h2 className="card-title">{name}</h2>
                        <h2>{experience}Years Experience</h2>
                        <p>{likes} Likes</p>
                        <p className='font-bold'>Recipes</p>
                        <ol>
                            {
                                recipes.map(recipe => <li key={recipe.name}># {recipe.name}</li>)
                            }
                        </ol>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to={`/chefs/${id}`}>View Recipes</Link></button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ChefsDetails;