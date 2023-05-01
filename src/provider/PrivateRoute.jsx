import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <div className='my-10 text-center'>
            <progress className="progress w-56"></progress>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>;
};

export default PrivateRoute;