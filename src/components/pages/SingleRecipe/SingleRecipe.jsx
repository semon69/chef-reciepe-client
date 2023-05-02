import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleRecipe = ({recipe}) => {
    const {name, rating, method, ingredients} = recipe;
    const [btn, setBtn] = useState(false);

    const notify = () =>{
        toast("Added to favorite!")
        setBtn(true)
    };
    return (
        <div>
            <div>
                <div className="card w-96 bg-white shadow-xl border-white">
                    <div className="card-body text-black">
                        <h2 className="card-title">Recipe Name:</h2>
                        <p className='font-bold text-blue-800'>{ name}</p>
                        <p className='font-bold'>Ingredients: </p>
                        <div>
                            {
                                ingredients.map(gradient => <p key={gradient}># {gradient}</p>)
                            }
                        </div>
                        <p className='font-bold'>Cooking Method: </p>
                        <p>{method}</p>
                        <p className='font-bold'>Ratings: {rating}</p>
                        <button onClick={notify} disabled={btn} className="btn btn-primary">Favorite</button>
                        <ToastContainer />
                   </div>
                </div>
            </div>
        </div>
    );
};

export default SingleRecipe;