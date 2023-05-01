import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import ChefsDetails from '../pages/SignleChefsDetails/ChefsDetails';
const Home = () => {
    const chefs = useLoaderData();
    return (
        <div>
            <div style={{}} className='bgImage my-10'>
                <h1>image</h1>
            </div>
            <div className='grid grid-cols-3 max-w-7xl w-full mx-auto my-10'>
                {
                    chefs.map(chef => <ChefsDetails key={chef.id} chef={chef}></ChefsDetails>)
                }
            </div>
        </div>
    );
};

export default Home;