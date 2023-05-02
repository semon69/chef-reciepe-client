import React from 'react';

const LatestRecipe = () => {
    return (
        <div className=' w-ful max-w-7xl mx-auto my-10'>
            <h1 className='text-center text-white font-bold text-5xl mb-10 italic'>Our latest Recipe</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className="card w-96 glass mb-10">
                    <figure><img src="https://tinysalt.loftocean.com/elementor/wp-content/uploads/sites/4/2022/08/monika-grabkowska-dGxSJzhgW0o-unsplash.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Pommes Purée</h2>
                    </div>
                </div>

                <div className="card w-96 glass mb-10">
                    <figure><img src="https://tinysalt.loftocean.com/elementor/wp-content/uploads/sites/4/2022/08/food-photographer-jennifer-pallian-6S27S6pZ6o0-unsplash.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Le Bar de Ligne</h2>
                    </div>
                </div>

                <div className="card w-96 glass mb-10">
                    <figure><img src="https://tinysalt.loftocean.com/elementor/wp-content/uploads/sites/4/2022/08/monika-grabkowska-318700-unsplash.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Le Bar Cuit à la Vapeur</h2>
                    </div>
                </div>
                <div className="card w-96 glass mb-10">
                    <figure><img src="https://tinysalt.loftocean.com/elementor/wp-content/uploads/sites/4/2022/08/le-buzz-576478-unsplash-2.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> Le Saumon Fumé</h2>
                    </div>
                </div>
                <div className="card w-96 glass mb-10">
                    <figure><img src="https://tinysalt.loftocean.com/elementor/wp-content/uploads/sites/4/2022/08/jennifer-schmidt-MRHyv-hHxgk-unsplash.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Le Soufflé au Fromage</h2>
                    </div>
                </div>
                <div className="card w-96 glass mb-10">
                    <figure><img src="https://tinysalt.loftocean.com/elementor/wp-content/uploads/sites/4/2022/08/alex-loup-aX_ljOOyWJY-unsplash.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Pushanic Istr</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestRecipe;