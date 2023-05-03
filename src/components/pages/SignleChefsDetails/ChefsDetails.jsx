import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefsDetails = ({ chef }) => {
    const { experience, likes, name, picture, recipes, id } = chef;
    return (
        <div>

            <div style={{width:'350px'}}  className="card bg-base-100 shadow-xl my-10 rounded">

                <figure>
                    <LazyLoad height={256} width={400} threshold={0.80}>
                        <img className='h-64' src={picture} alt="Chef's" />
                    </LazyLoad>
                </figure>

                <div className="card-body bg-white text-black">
                    <h2 className="card-title">{name}</h2>
                    <h2>{experience} Years Experience</h2>
                    <p>{likes} Likes</p>
                    <p className='font-bold'>{recipes.length } Recipes</p>
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