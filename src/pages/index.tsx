"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
import Receipe from "./Receipe";
import { PiCookingPotFill } from "react-icons/pi";
import Banner from "@/components/banner";
import { motion } from "framer-motion";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
 
  return (
   <main className="lg:w-[1240px] md:w-[700px] h-full  ml-10 mt-5">
    <div className="flex  items-center  gap-5 text-purple-800 ">
    <PiCookingPotFill size={30}  className=""/>
    <motion.h1 
    initial={{y: -250}}
    animate={{y:-5}}
    transition={{delay:0.2, type:'spring', stiffness:120}}
    className="font-bold text-3xl ">  Burmese Receipes</motion.h1>
    </div>
    <Banner/>
    <Receipe/>
   </main>
  );
}
