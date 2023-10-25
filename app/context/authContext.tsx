'use client';

import {createContext, ReactNode, useContext, useState} from "react";

interface AuthContextProps{
    userId: string | null;
    token: string | null;
    contextLogin: (userId: string, token: string) => void;
    logout: () => void;
}


const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthContextProvider = ({children}: {children: ReactNode}) => {
    const [userId, setUserId] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const contextLogin = (userId: string, token: string) => {
        setUserId(userId);
        setToken(token);
    };

    const logout = () => {
        setUserId(null);
        setToken(null);
    };
    

    return(
        <AuthContext.Provider value = {{userId, token, contextLogin, logout}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if(context === undefined) {
        throw new Error('Error is occurrring')
    }
    return context
}