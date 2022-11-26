
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";

const AttractionPage = () => {
    
    const [attract, setAttract] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const[page,setPage] = useState(0);
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
        fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?countryCode=SG&page=${page}&size=12&apikey=${apiKey}`)
        .then(res => {
            return res.json();
        })    
        .then(data=>{
            setIsLoaded(true);
            setAttract(data._embedded.attractions);
        })    
    },[page])    



    if(!isLoaded){
        return <progress>Loading...</progress>
    }
    else return ( 
        <>
        <Navbar/>
        <div className="layout">
        {attract.map((x) =>(
            <div key={x.id} className="grid-item">
                {<a href={x.url} target="_blank" rel="noopener noreferrer">
                    {<img src={x.images[0].url} width="305" height="155" />}
                </a>}
                <p>{x.name}</p>
                
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
 
export default AttractionPage;