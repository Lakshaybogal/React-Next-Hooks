"use client";

import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

interface GlobalContextValue {
    state: boolean;
    setState: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<GlobalContextValue | undefined>(undefined);

export const GlobalContextProvider = ({ children }) => {
    const [state, setState] = useState<boolean>();

    return (
        <GlobalContext.Provider value={{ state, setState }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
