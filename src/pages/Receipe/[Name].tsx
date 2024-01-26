import { useRouter } from 'next/router';
import React from 'react'
import { fetchReceipeFromName } from '../api/json/BurmeseRecipe ';
import Link from 'next/link';


export default function Category() {
    const {query} = useRouter();
    const receipeName = query.Name;
    const receipe = fetchReceipeFromName(receipeName); 
    console.log(receipe);
    
    
  return (
    <div className="mt-5" >
           <Link href={"/"} className='border bg-purple-500 text-white rounded-lg ml-3 border-purple-500 px-5 py-1'>Back</Link>
           <div className="flex w-[1240px] h-screen gap-5 items-center mt-" >
           <div className='w-1/2 ml-5'>
            
           <img src={`/images/${receipe?.Name}.jpg`}
           className=" border-double border-[10px] border-gray-300 p-4"
           alt={receipe?.Name} width={300} height={300} />
           </div>

           <div className='w-1/2 flex flex-col gap-8'>
            <h1  className='text-2xl font-bold '>Menu Name</h1>
           <h1 className='text-2xl font-bold text-purple-800'>{receipe?.Name}</h1>
           <h1 className='text-2xl font-bold'>Ingredients</h1>
           <h1 className='font-bold text-purple-800'>{receipe?.Ingredients}</h1>
           <h1 className='text-2xl font-bold'>How to Cook</h1>
           <h1 className='font-bold text-purple-800'>{receipe?.CookingInstructions}</h1>
           <h1 className='text-2xl font-bold'>Menu Type</h1>
          {receipe?.UserType === "001"? 
          (<h1  className='font-bold text-purple-800'>Meat Eater</h1>):
          (<h1  className='font-bold text-purple-800'>Vegetable Eater</h1>)}
           
           </div>
          
           
       
       </div>
    

    

</div>
  )
}
