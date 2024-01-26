
import Link from "next/link";
import { Receipes } from "../api/json/BurmeseRecipe ";
import { useState } from "react";

interface ReceipeProps {
    
}

const Receipe:React.FC<ReceipeProps> = () => {
    const[visible,setVisible] = useState(3)

    const moreclick = () => {
        setVisible((preValue)=> preValue+3)
    }
   
   
    return (
        <>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10 mt-5 lg:mt-16">
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
        
         
     </div>
     <div  className="flex justify-center items-center mt-5 mb-3 ">
     <button className="bg-purple-800 shadow-lg py-1 px-1 text-white rounded-lg" onClick={moreclick}>View More</button>
     </div>
     </>
      );
}
 
export default Receipe;