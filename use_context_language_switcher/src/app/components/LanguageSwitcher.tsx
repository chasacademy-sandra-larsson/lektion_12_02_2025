"use client";

import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext";

function LanguageSwitcher() {

    const context = useContext(LanguageContext);

    console.log(context);

    if(!context) {
        throw new Error("Langueswitcher does not have a valid language")
    }

    const { language, setLanguage } = context;

    return (
        <div className="flex item-center gap-4">
            Current language: {language}
            <button  
                className="border-black border-2 rounded-md px-2 py-2"
                onClick={() => setLanguage("sv")}>
                    Svenska
            </button>
            <button className="border-black border-2 rounded-md px-2 py-2"
                onClick={() => setLanguage("en")}>
                    English
            </button>
        </div>
    )

}

export default LanguageSwitcher;