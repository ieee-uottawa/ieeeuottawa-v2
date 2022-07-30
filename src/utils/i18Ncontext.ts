import React, { createContext } from "react";

export const I18NContext = createContext<{
    locale: string;
    setLocale: React.Dispatch<React.SetStateAction<string>>;
}>(null);