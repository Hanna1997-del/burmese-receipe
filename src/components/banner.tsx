interface BannerProps {
    
}
 
const Banner: React.FC<BannerProps> = () => {
    return ( 
        <div className="w-screen h-screen mt-10">
           <div className="max-w-[1240px] h-full relative">
            <img src={"/images/BurmeseCurry.jpg"} className="w-full h-[600px]" alt="banner" />

            <div className="absolute pt-5 pl-3 w-[300px] h-[100px] font-bold text-xl text-purple-800 bg-white bottom-24 left-5 rounded-lg">
               <h1>Yummy 💜💜</h1>
               <h1>Burmese Curry Receipe 🍛🍛</h1>
            </div>
           </div>
        </div>
     );
}
 
export default Banner;