'use client'
import { createContext,useContext,useState } from "react";

type User = {
    name: string,
    email: string,
}
type AuthContext = {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}
const AuthContext = createContext<AuthContext | undefined>(undefined);

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children})=>{

    const [user,setUser] = useState<User | null>(null);
    const login = (userData:User) =>{
        setUser(userData);
    }
    const logout = () =>{
        setUser(null);
    }

    return (
        <AuthContext.Provider value ={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};