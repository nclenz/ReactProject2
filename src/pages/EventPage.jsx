import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";


const EventPage = () => {
    const [event, setEvent] = useState([]);
    const[page,setPage] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false);
    const apiKey = "I2tZNbEtauHghOYF8Z22rOMU0VGJmLQt";

    
    useEffect(() =>{
        fetch(`https://app.ticketmaster.com/discovery/v2/events.json?&page=${page}&size=12&apikey=${apiKey}`)
        .then(res => {
            return res.json();
        })
        .then(data=>{
            setIsLoaded(true)
            setEvent(data._embedded.events)
        })
    },[page])

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


    if(!isLoaded){
        return <progress>Loading...</progress>
    }
    else return ( 
        <>
        <Navbar/>
        <div className="layout">
        {event.map((x) =>(
            <div key={x.id} className="grid-item">
                {<a href={x.url}>
                    <img  className="cursor-pointer" 
                    src = {x.images[0].url} 
                    width="305" height="155" 
                    />
                 </a>
                 }
                <p className="event-name">{x.name}</p>
                <p >{x.dates.start.localDate}</p>
            </div>
            ))}  
        </div>


    <span className="PageButton">
        <button onClick={handlePreviousPage}>Prev</button>
        {num.map((pageNum) => (
        <button onClick={() => handlePage(pageNum)}
        key={pageNum}>{pageNum}</button>
        ))}
        <button onClick={handleNextPage}>Next</button>
    </span>
    </>
     );
}
 
export default EventPage;