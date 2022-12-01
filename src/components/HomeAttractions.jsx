import { useState, useEffect } from "react";
import {MdChevronLeft, MdChevronRight} from "react-icons/md"

const HomeAttractions = () => {
    const [homeEvent, sethomeEvent] = useState([])

    const apiKey = "I2tZNbEtauHghOYF8Z22rOMU0VGJmLQt";

    useEffect(() =>{
        fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?size=20&apikey=${apiKey}`)
        .then(res => {
            return res.json();
        })
        .then(data=>{
            sethomeEvent(data._embedded.attractions) 
        })
    },[])

    const slideLeft = () =>{
        let slider = document.getElementById('attractionSlider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () =>{
        let slider = document.getElementById('attractionSlider')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return ( 
        <>
        <h1 className="text-2xl  font-sans font-bold m-6">Events</h1>
        <div className="relative flex items-center">
            <MdChevronLeft onClick={slideLeft} size={40} className="opacity-50 cursor-pointer hover:opacity-100 "/>
        <div id="attractionSlider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"> 
            {homeEvent.map((item) =>(
                <img key={item.id} src={item.images[0].url}  alt="/" className="w-[400px] inline-block p-2 cursor-pointer ease-in-out duration-300 hover:scale-105" />
            ))}
        </div>
            <MdChevronRight onClick={slideRight} size={40} className="opacity-50 cursor-pointer hover:opacity-100 "/>
        </div>


        
        </>
     );
    }
    
    
  
    
    export default HomeAttractions;
    
    
    
