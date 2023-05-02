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
                <div className="card w-96 bg-base-100 shadow-xl border-white">
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
                        <button onClick={notify} disabled={btn} className="btn btn-primary">Favorite</button>
                        <ToastContainer />
                   </div>
                </div>
            </div>
        </div>
    );
};

export default SingleRecipe;