import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const {user} = useContext(AuthContext);
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

                        {
                            user ?
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                        </div>
                                    </label>
                                </div>
                                :
                                <button className="btn btn-active"><Link to='/login'>Login</Link></button>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;