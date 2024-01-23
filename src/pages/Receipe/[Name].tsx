import { useRouter } from 'next/router';
import React from 'react'
import { fetchReceipeFromName } from '../api/json/BurmeseRecipe ';


export default function Category() {
    const {query} = useRouter();
    const receipeName = query.Name;
    const receipe = fetchReceipeFromName(receipeName); 
    console.log(receipe);
  return (
    <div className="" >
           
           <div className="flex flex-col gap-5 items-center mt-10" >
           
           <img src={`/images/${receipe?.Name}.jpg`}
           className=" border-double border-[10px] border-gray-300 p-4"
           alt={receipe?.Name} width={200} height={200} />

           <h1>{receipe?.Name}</h1>
           <h1>{receipe?.Ingredients}</h1>
           <h1>{receipe?.CookingInstructions}</h1>
           <h1>{receipe?.UserType}</h1>
          
           
       
       </div>
    

    

</div>
  )
}
