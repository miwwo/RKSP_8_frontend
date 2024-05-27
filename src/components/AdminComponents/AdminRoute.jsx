import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = ({children}) => {
    const user = useSelector(state => state.user);
    if (user.token && user.roles.includes('ROLE_ADMIN')) {
        return <>{children}</>;
    }
    else
        return <Navigate to="/NoPermission" />;
};

export default AdminRoute;