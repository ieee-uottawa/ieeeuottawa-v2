import React, { createContext } from "react";

export const I18NContext = createContext<{
    locale: string;
    setLanguage: (language: string) => void;
    translate: (input: string) => string;
}>(null);