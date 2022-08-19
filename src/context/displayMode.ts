import React, { createContext } from "react";

export const DisplayModeContext = createContext<{
    displayMode: 'dark' | 'light';
    setDisplayMode: React.Dispatch<React.SetStateAction<string>>;
}>(null);