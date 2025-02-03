import React, { createContext, useState, useEffect, useContext, useCallback } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        // Initialize auth state from localStorage
        const storedAuth = localStorage.getItem('auth');
        return storedAuth ? JSON.parse(storedAuth) : null;
    });

    // Only update localStorage when auth changes
    useEffect(() => {
        if (auth === null) {
            localStorage.removeItem('auth');
        } else {
            localStorage.setItem('auth', JSON.stringify(auth));
        }
    }, [auth]);

    const login = useCallback((userData) => {
        setAuth({ userData });
        localStorage.setItem('revelUser', JSON.stringify(userData));
    }, []);

    const logout = useCallback(() => {
        setAuth(null);
        localStorage.removeItem('revelUser');
        localStorage.removeItem('auth');
    }, []);

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};