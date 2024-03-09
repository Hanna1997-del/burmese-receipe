"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface BannerProps {
    
}
 
const Banner: React.FC<BannerProps> = () => {
   const ref = useRef<HTMLDivElement>(null);
   const {scrollYProgress} = useScroll({
        target:ref,
        offset:["1 0.5", "1.33 1"]
    })
   const scaleProgress = useTransform(scrollYProgress, [0 ,1],[0.8,1])
   const opacityProgress = useTransform(scrollYProgress,[1,0.5],[1.33,0.5])
    return ( 
        <motion.div
        ref={ref}
         style={{
            scale: scaleProgress,
            opacity: opacityProgress
         }}
         className="w-screen h-[400px] mt-10 mb-0">
           <div className=" max-w-[400px] max-h-[300px] mr-16 lg:max-w-[1240px] lg:max-h-[500px] relative">
            <img src={"/images/BurmeseCurry.jpg"} className="w-full max-h-[500px]" alt="banner" />

            <div className="absolute pt-5 pl-3 w-[300px] h-[100px] font-bold text-xl text-purple-800 bg-white bottom-24 left-5 rounded-lg">
               <h1>Yummy 💜💜</h1>
               <h1>Burmese Curry Receipe 🍛🍛</h1>
            </div>
           </div>
        </motion.div>
     );
}
 
export default Banner;