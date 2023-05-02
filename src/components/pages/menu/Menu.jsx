import React from 'react';

const Menu = () => {
    return (
        <div className='w-full max-w-7xl mx-auto'>
            <h1 className='text-center text-white font-bold text-5xl mb-10 italic'>Look at our Menu</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 px-10'>
                <div className="card w-96 bg-white shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center text-black">
                        <h2 className="card-title">Boeuf Bourguignon</h2>
                        <p>Price: $25</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-white shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center text-black">
                        <h2 className="card-title">French Fries</h2>
                        <p>Price: $20</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-white shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://images.unsplash.com/photo-1592314653465-a9abab6479b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center text-black">
                        <h2 className="card-title"> Tournedos Rossini</h2>
                        <p>Price: $30</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-36 mx-auto my-10'>
                <button className='btn btn-primary '>Show More</button>

            </div>
        </div>
    );
};

export default Menu;