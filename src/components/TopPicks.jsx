import { imageData } from "../data/topPickImagejs";
import {MdChevronLeft, MdChevronRight} from "react-icons/md"

const TopPicks = () => {

    const slideLeft = () =>{
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () =>{
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    
    return ( 
        <>
        <h1 className="text-2xl  font-sans font-bold m-6">Top Picks</h1>
        <div className="relative flex items-center">
            <MdChevronLeft onClick={slideLeft} size={40} className="opacity-50 cursor-pointer hover:opacity-100 "/>
        <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"> 
            {imageData.map((item) =>(
                <img key={item.id} src={item.img} alt="/" className="w-[400px] inline-block p-2 cursor-pointer ease-in-out duration-300 hover:scale-105" />
            ))}
        </div>
            <MdChevronRight onClick={slideRight} size={40} className="opacity-50 cursor-pointer hover:opacity-100 "/>
        </div>


        
        </>


     );
}
 
export default TopPicks;