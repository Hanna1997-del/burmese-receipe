import Image from "next/image";
import { Inter } from "next/font/google";
import Receipe from "./Receipe";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <main className="w-[1240px] h-full  ml-10 mt-5">
    <h1 className="font-bold text-3xl">Burmese Receipes</h1>
    <Receipe/>
   </main>
  );
}
