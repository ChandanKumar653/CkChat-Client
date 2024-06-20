import React from 'react';
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { local } = useSelector((state) => state.auth); 
    const location = useLocation();

    if (!local.isAuthenticated) {
        return <Navigate to="/sign-in" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;
