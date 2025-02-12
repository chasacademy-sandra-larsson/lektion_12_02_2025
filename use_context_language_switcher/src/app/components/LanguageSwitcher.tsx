"use client";

import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext";

function LanguageSwitcher() {

    const context = useContext(LanguageContext);

    if(!context) {
        throw new Error("Langueswitcher does not have a valid language")
    }

    console.log(context);

    return (
        <div>
            <p> switch language </p>
        </div>
    )

}

export default LanguageSwitcher;