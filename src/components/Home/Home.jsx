import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import ChefsDetails from '../pages/SignleChefsDetails/ChefsDetails';
const Home = () => {
    const chefs = useLoaderData();
    return (
        <div>
            <div style={{}} className='bgImage my-10'>
                <div className='lg:flex justify-center items-center gap-16 p-5 italic'>
                    <div>
                        <p className='text-5xl font-bold lg:mt-40 mt-20'>Welcome to <br /> <span className='text-blue-600'>French Chef's Website</span></p>
                    </div>
                    <div className='lg:mt-40 mt-20'>
                        <p className='text-3xl font-bold'>We are providing the best food in the country</p>
                        <p className='text-2xl font-bold my-4'>Signature items of us:</p>
                        <ul className='text-blue-600'>
                            <li>1. Boeuf Bourguignon</li>
                            <li>2. Tournedos Rossini</li>
                            <li>3. Pommes Purée</li>
                            <li>4. Le Bar Cuit à la Vapeur</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 max-w-7xl w-full mx-auto my-10 px-5'>
                {
                    chefs.map(chef => <ChefsDetails key={chef.id} chef={chef}></ChefsDetails>)
                }
            </div>
        </div>
    );
};

export default Home;