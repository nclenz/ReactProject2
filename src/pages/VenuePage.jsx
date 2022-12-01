import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import dataCode from "../data/dataCode.json";
import Loader from "../components/Loader";



const VenuePage = () => {
    const [venue, setVenue] = useState([]);
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
    for (let i = 1; i <= 10; i++) {
        num.push(i);
    }

    useEffect(() =>{
        fetch(`https://app.ticketmaster.com/discovery/v2/venues.json?countryCode=${countryCode}&page=${page}&size=20&apikey=${apiKey}`)
        .then(res => {
            return res.json();
        })
        .then(data=>{
            setIsLoaded(true)
            if (data._embedded !== undefined) { 
            setVenue(data._embedded.venues)
            } else {
                console.log("No information available")
            }
        })
    },[page, countryCode])

    console.log(venue)
    if(!isLoaded){
        return <Loader/>
      }
       else return ( 
        <>
         <Navbar/>

         <span >
        <select  name="CountryCode" onChange={(e) =>setCountryCode(e.target.value.split(',').pop())}>
            <option default>Select Your Country</option>
           {dataCode.map((x) =>(
                <option key={x.Code}>{x.Name},{x.Code}</option>
                ))}
        </select>
            
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
    onClick={handlePreviousPage}>Prev</button>
    
    {num.map((pageNum) => (
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
        onClick={() => handlePage(pageNum)}
        key={pageNum}>{pageNum}</button>
        ))}
        
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
        onClick={handleNextPage}>Next</button>
            </span> 

        {/* <div className="layout">
        {venue.map((x) =>(
            <div key={x.id} className="grid-item" >
                {<a href={x.url} target="_blank" rel="noopener noreferrer">
                    <img  className="cursor-pointer" 
                    src = {x.images[0].url} 
                    width="305" height="155" 
                    />
                 </a>
                 }
                <p className="event-name">{x.name}</p>
               
            </div>
            ))}  
        </div> */}

   
    </>
     );
}
 
export default VenuePage;