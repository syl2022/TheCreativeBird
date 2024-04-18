import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const getAuthenticatedUser = () => {
        return window.localStorage.getItem("user");
    };

    return (
        <AuthContext.Provider value={{ getAuthenticatedUser}}>
            {children}
        </AuthContext.Provider>
    );
};