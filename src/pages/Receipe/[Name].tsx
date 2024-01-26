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
    <div className="mt-5 ml-5" >
           <Link href={"/"} className='border bg-purple-500 text-white rounded-lg  border-purple-500 px-5 py-1'>Back</Link>
           <div className="grid grid-cols-1 lg:grid-cols-2 w-screen h-screen gap-5 lg:items-center " >
           <div className='w-1/2 lg:ml-5 ml-0 '>
            
           <img src={`/images/${receipe?.Name}.jpg`}
           className=" border-double border-[10px] mt-5 border-gray-300 p-4"
           alt={receipe?.Name} width={600} height={600}  />
           </div>

           <div className='lg:w-1/2 w-[400px] flex flex-col  gap-10 mt-10  '>
            <h1  className='text-3xl font-bold '>Menu Name</h1>
           <h1 className='text-3xl font-bold text-purple-800'>{receipe?.Name}</h1>
           <h1 className='text-3xl font-bold'>Ingredients</h1>
           <h1 className='font-bold text-2xl text-purple-800'>{receipe?.Ingredients}</h1>
           <h1 className='text-3xl font-bold'>How to Cook</h1>
           <h1 className='font-bold text-2xl text-purple-800'>{receipe?.CookingInstructions}</h1>
           <h1 className='text-3xl font-bold'>Menu Type</h1>
          {receipe?.UserType === "001"? 
          (<h1  className='font-bold text-2xl text-purple-800'>Meat Eater</h1>):
          (<h1  className='font-bold text-2xl text-purple-800'>Vegetable Eater</h1>)}
           
           </div>
          
           
       
       </div>
    

    

</div>
  )
}
