import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const {user, logout} = useContext(AuthContext);
    return (
        <div className='max-w-7xl w-full mx-auto'>
            <div className="navbar bg-base-100  flex-col lg:flex-row lg:justify-between">
                <div className="">
                    <a className="text-white font-bold text-4xl ">French Chef</a>
                </div>
                <div className='flex justify-around gap-8 my-3'>
                    <div className='inline-flex gap-8'>
                        <NavLink className={({ isActive}) => isActive ? 'bg-blue-800 text-white px-2 rounded' : ''} to='/'>Home</NavLink>
                        <NavLink className={({ isActive}) => isActive ? 'bg-blue-800 text-white px-2 rounded' : ''} to='blog'>Blog</NavLink>
                    </div>
                    <div className="flex-col">

                        {
                            user ?
                                <div className="dropdown dropdown-end lg:inline-flex justify-center items-center">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img title={user.displayName} src={`${user?.photoURL}`} alt='Photo'/>
                                        </div>
                                    </label>
                                    <button onClick={logout} className='btn btn-primary'>Logout</button>
                                </div>
                                :
                                <button className="btn btn-primary"><Link to='/login'>Login</Link></button>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;