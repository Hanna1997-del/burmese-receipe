"use client"
import axios from "axios";
import { useEffect } from "react";
import Receipes from "../json/BurmeseRecipes.json";
import Link from "next/link";

interface ReceipeProps {
    
}
 
const Receipe: React.FC<ReceipeProps> = () => {
 
    return ( 
        <div className=" grid grid-cols-2 gap-10 mt-10">
           {Receipes.map((receipe)=>(
            <div className="flex gap-5 items-center">
              
                <img src={`/images/${receipe.Name}.jpg`}
                className=" border-double border-[10px] border-gray-300 p-4"
                alt={receipe.Name} width={200} height={200} />
                <Link href={"/"}>
                    <h1 className="font-bold text-2xl">{receipe.Name}</h1>
                </Link>

                
            
            </div>
           
           ))}
        </div>
     );
}
 
export default Receipe;