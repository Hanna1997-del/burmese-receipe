
import Link from "next/link";
import { Receipes } from "../api/json/BurmeseRecipe ";

interface ReceipeProps {
    
}

const Receipe:React.FC<ReceipeProps> = () => {
   
    return (
        <div className=" grid grid-cols-3 gap-10 mt-16">
        {Receipes.map((receipe, index)=>(
         <div className="flex gap-5 max-w-[280px] max-h-[500px]  justify-center items-center mt-10 shadow-xl"  key={index}>
           
            
             <Link href={`/Receipe/${receipe.Name}`}>
                 <img src={`/images/${receipe.Name}.jpg`}
             className=" w-[260px] h-[300px]  "
             alt={receipe.Name}  />
                 <h1 className="font-bold text-2xl py-10 w-[250px]">{receipe.Name}</h1>
             </Link>

             
         
         </div>
        
        ))}
     </div>
      );
}
 
export default Receipe;