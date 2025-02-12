"use client"

import Image from "next/image";
import MyForm from "./components/MyForm";
import MyFormZod from "./components/MyFormZod";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
    {/* <MyForm/> */}
    <MyFormZod/>
    </div>
  );
}
