"use client";

import { createContext, useState } from "react"

type LanguageConextType = {
    language: string;
    setLanguage: (language: string) => void;
}

export const LanguageContext = createContext<LanguageConextType | undefined>(undefined);

export function LanguageProvider({children}: {children: React.ReactNode}) {

    const [language, setLanguage] = useState("en")
    

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )

}


