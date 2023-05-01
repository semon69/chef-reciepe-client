import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <h1>Welcome to French Cuisine</h1>
            <div className="navbar bg-base-100 flex justify-between">
                <div className="">
                    <a className="btn btn-ghost normal-case text-xl">French Cuisine</a>
                </div>
                <div className='flex justify-around gap-8'>
                    <div className='inline-flex gap-8'>
                        <Link to='/'>Home</Link>
                        <Link to='blog'>Blog</Link>
                    </div>
                    <div className="">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                        </div>
                        <button className="btn btn-active"><Link to='/login'>Login</Link></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;