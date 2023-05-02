import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import ChefsDetails from '../pages/SignleChefsDetails/ChefsDetails';
import Menu from '../pages/menu/Menu';
import LatestRecipe from '../pages/latestRecipe/LatestRecipe';
const Home = () => {
    const chefs = useLoaderData();
    return (
        <div>
            <div style={{}} className='bgImage my-10'>
                <div className='lg:flex justify-center items-center gap-24 p-5 italic'>
                    <div>
                        <p className='text-5xl font-bold lg:mt-40 mt-20 text-white'>Welcome to <br /> <span className='text-blue-600'>French Chef's Website</span></p>
                    </div>
                    <div className='lg:mt-40 mt-20'>
                        <p className='text-3xl font-bold text-white'>We are providing the best food in the country</p>
                        <p className='text-2xl font-bold my-4 text-white'>Signature items of us:</p>
                        <ul className='text-blue-400'>
                            <li>1. Boeuf Bourguignon</li>
                            <li>2. Tournedos Rossini</li>
                            <li>3. Pommes Purée</li>
                            <li>4. Le Bar Cuit à la Vapeur</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1 className='text-center text-white font-bold text-5xl mb-10 italic'>Our Chef's</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 max-w-7xl w-full mx-auto my-10 lg:px-10 px-6'>
                {
                    chefs.map(chef => <ChefsDetails key={chef.id} chef={chef}></ChefsDetails>)
                }
            </div>
            <div>
                <Menu></Menu>
                
            </div>
            <div>
                <LatestRecipe></LatestRecipe>
            </div>
        </div>
    );
};

export default Home;