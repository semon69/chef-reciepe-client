import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const {user, logout} = useContext(AuthContext);
    return (
        <div>
            <h1>Welcome to French Chef's Website</h1>
            <div className="navbar bg-base-100 flex justify-between">
                <div className="">
                    <a className="btn btn-ghost normal-case text-xl">French Chef</a>
                </div>
                <div className='flex justify-around gap-8'>
                    <div className='inline-flex gap-8'>
                        <NavLink className={({ isActive}) => isActive ? 'bg-blue-800 text-white px-2 rounded' : ''} to='/'>Home</NavLink>
                        <NavLink className={({ isActive}) => isActive ? 'bg-blue-800 text-white px-2 rounded' : ''} to='blog'>Blog</NavLink>
                    </div>
                    <div className="">

                        {
                            user ?
                                <div className="dropdown dropdown-end inline-flex justify-center items-center">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                        </div>
                                    </label>
                                    <button onClick={logout} className='btn btn-active'>Logout</button>
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