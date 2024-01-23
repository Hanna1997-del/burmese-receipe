
import Link from "next/link";
import { Receipes } from "../api/json/BurmeseRecipe ";

interface ReceipeProps {
    
}

const Receipe:React.FC<ReceipeProps> = () => {
   
    return (
        <div className=" grid grid-cols-2 gap-10 mt-10">
        {Receipes.map((receipe, index)=>(
         <div className="flex gap-5 items-center mt-10" key={index}>
           
             <img src={`/images/${receipe.Name}.jpg`}
             className=" border-double border-[10px] border-gray-300 p-4"
             alt={receipe.Name} width={200} height={200} />
             <Link href={`/Receipe/${receipe.Name}`}>
                 <h1 className="font-bold text-2xl">{receipe.Name}</h1>
             </Link>

             
         
         </div>
        
        ))}
     </div>
      );
}
 
export default Receipe;