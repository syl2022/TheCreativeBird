import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";
import {AuthContext} from "./AuthContext";
import Home from "../pages/Home";

export const ProtectedRoute =  () => {
    const {getAuthenticatedUser} = useContext(AuthContext);
    return (getAuthenticatedUser()!==null) ? <Home/> : <Navigate to="/login"/>;
};
