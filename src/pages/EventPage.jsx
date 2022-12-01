import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import dataCode from "../data/dataCode.json";
import Loader from "../components/Loader";
import HomePage from "./HomePage";



const EventPage = ({addWish, wishlist}) => {
    const [event, setEvent] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [countryCode, setCountryCode] = useState('US');


    const apiKey = "I2tZNbEtauHghOYF8Z22rOMU0VGJmLQt";

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    const handleNextPage = () =>{
        setPage(page + 1)
    }
  
    const handlePreviousPage = () =>{
        ( page < 1 ? '' :  setPage(page - 1))  
    }

    const handlePage = (toPage) => {
        setPage(toPage)
    }
    
    let num = [];
    for (let i = 10; i >= 1; i--) {
        num.push(i);
    }
    
    useEffect(() =>{
        fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${countryCode}&page=${page}&size=20&apikey=${apiKey}`)
        .then(res => {
            return res.json();
        })
        .then(data=>{
            setIsLoaded(true)
            if (data._embedded !== undefined) { 
                setEvent(data._embedded.events)
            } else {
                console.log("No events available")
            }
        })
    },[page, countryCode])
    

        const handleWish = (item) => { 
            addWish(item);
            // if(wishlist.includes(item)){
                console.log(item)
            // }
          };



    // if (handleWish === true) {
    //   text = "Wished";
    // }



    if(!isLoaded){
        return <Loader/>
      }
       else return ( 
        <>
         <Navbar/>

         <span className="inline">
        <select  name="CountryCode" onChange={(e) =>setCountryCode(e.target.value.split(',').pop())} className="mt-6 ml-6">
            <option default>Select Your Country</option>
           {dataCode.map((x) =>(
                <option key={x.Code}>{x.Name},{x.Code}</option>
                ))}
        </select>

        <div className="mr-6">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
        onClick={handleNextPage}>Next</button>

        
    
    {num.map((pageNum) => (
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
        onClick={() => handlePage(pageNum)}
        key={pageNum}>{pageNum}</button>

        ))}
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
    onClick={handlePreviousPage}>Prev</button>
        
        </div>
            </span> 

        <div className="layout">
        {event.length > 0 && event.map((x) =>(
            <div key={x.id} className="grid-item" >
                {<a href={x.url} target="_blank" rel="noopener noreferrer">
                    <img  className="cursor-pointer" 
                    src = {x.images[0].url} 
                    width="305" height="155" 
                    />
                 </a>
                 }
                <p className="event-name">{x.name}</p>
                <p >{x.dates.start.localDate}</p>
                <button onClick={() => handleWish(x)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow">{wishlist.includes(x) ? "Wished" : "Add to Wishlist"}</button>
            </div>
            ))}  
        </div>


    </>
     );
}
 
export default EventPage;