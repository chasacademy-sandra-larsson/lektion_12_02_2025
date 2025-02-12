"use client"

import { useContext } from "react"
import { LanguageContext } from "./context/LanguageContext";


export default function Home() {

  const context = useContext(LanguageContext);

  if(!context) throw new Error("No defined language");

  const {language} = context;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      { language === "sv" ? <h1>So swedish</h1> : language === "en" ? 
      <h1>My proper page</h1> : <h1>No language defined</h1>}
      

    </div>
  );
}
