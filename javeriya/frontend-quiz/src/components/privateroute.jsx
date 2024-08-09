import React from "react";
import { Route, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';

const PrivateRoute = ({ element: Component, ...rest }) => {
    const isAuthenticated = !!Cookies.get('token'); // Check if token exists

    if (!isAuthenticated) {
        toast.error("Please log in to access this page");
        return <Navigate to="/login" />;
    }

    return <Route {...rest} element={Component} />;
};
export default PrivateRoute;