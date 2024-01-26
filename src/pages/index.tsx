import Image from "next/image";
import { Inter } from "next/font/google";
import Receipe from "./Receipe";
import { PiCookingPotFill } from "react-icons/pi";
import Banner from "@/components/banner";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
 
  return (
   <main className="w-[1240px] h-full  ml-10 mt-5">
    <div className="flex  items-center  gap-5 text-purple-800 ">
    <PiCookingPotFill size={30}  className=""/>
    <h1 className="font-bold text-3xl ">  Burmese Receipes</h1>
    </div>
    <Banner/>
    <Receipe/>
   </main>
  );
}
