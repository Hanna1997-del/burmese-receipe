"use client";
import Link from "next/link";
import { Receipes } from "../api/json/BurmeseRecipe ";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ReceipeProps {
    
}
const menuVariants = {
    hidden: {
        opacity:0
    },
    visible: {
        opacity:1,
        transition: {
            delay:1.5,
            duration:1.5
        }
    }
}

const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow:   "0px 0px 8px rgb(255,255,255)",
        transition: {
          duration: 0.3,
          yoyo: Infinity
        }
      }
}
const Receipe:React.FC<ReceipeProps> = () => {
    const[visible,setVisible] = useState(6)

    const moreclick = () => {
        setVisible((preValue)=> preValue+3)
    }
  
    return (
        <>
        <motion.div
         variants={menuVariants}
         initial="hidden"
         animate="visible"
        className=" grid md:grid-cols-2 ml-5 lg:grid-cols-3 md:gap-8 lg:gap-10 mt-3 mb-0 lg:mt-16">
            
        {Receipes.slice(0,visible).map((receipe, index)=>(
         <div className="flex md:gap-1 lg:gap-5 max-w-[280px] max-h-[500px]  justify-center items-center mt-10 shadow-xl"  key={index}>
               
            
             <Link href={`/Receipe/${receipe.Name}`}>
                 <img src={`/images/${receipe.Name}.jpg`}
             className=" w-[260px] h-[200px]  "
             alt={receipe.Name}  />
                 <h1 className="font-bold text-2xl py-10 w-[250px]">{receipe.Name}</h1>
             </Link>
           
             
         
         </div>
        
        ))}
        
         
     </motion.div>
     <div  className="flex justify-center items-center mt-5 mb-3 ">
     <motion.button
      variants={buttonVariants}
      whileHover="hover"
     className="bg-purple-800 shadow-lg py-1 px-1 text-white rounded-lg" onClick={moreclick}>View More
     </motion.button>

    
     <motion.button
      variants={buttonVariants}
      whileHover="hover"
     className="bg-purple-800 shadow-lg py-1 px-1 text-white rounded-lg" onClick={moreclick}>View More
     </motion.button>

     <button>
        hello and then how are you
     </button>
     </div>
     </>
      );
}
 
export default Receipe;