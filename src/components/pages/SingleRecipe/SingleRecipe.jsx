import React from 'react';

const SingleRecipe = ({recipe}) => {
    const {name, rating, method, ingredients} = recipe;
    return (
        <div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Recipe Name</h2>
                        <p>{ name}</p>
                        <div>
                            {
                                ingredients.map(gradient => <p key={gradient}># {gradient}</p>)
                            }
                        </div>
                        <p>{method}</p>
                        <p>Ratings: {rating}</p>
                        <button className="btn btn-outline btn-primary">Favorite</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default SingleRecipe;