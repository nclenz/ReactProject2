import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import dataCode from "../data/dataCode.json"



const HomePage = () => {

const [input, setInput] = useState('')
const [countryCode, setCountryCode] = useState('US')
const [category, setCategory] = useState('events')

const slides = [];

console.log(countryCode);



// useEffect(() =>{
//     fetch(`https://app.ticketmaster.com/discovery/v2/${category}.json?countryCode=${countryCode}&page=${page}&size=12&apikey=${apiKey}`)
//     .then(res => {
//         return res.json();
//     })    
//     .then(data=>{
//         setIsLoaded(true);
//         setAttract(data._embedded.attractions);
//     })    
// },[page])    



    return ( 
        <>
        <Navbar/>


        {/* <form onSubmit={handleSubmit}>
        <input placeholder="Search"
        onChange={(e) => setInput(e.target.value)}/>
        <button>Submit</button>
        </form> */}

           
        <select name="CountryCode" onChange={(e) => setCountryCode(e.target.value.split(',').pop())}>
            <option default>Select Your Country</option>
           {dataCode.map((x) =>(
                <option key={x.Code}>{x.Name},{x.Code}</option>
                ))}
        </select>

        <select name="Category" onChange={(choiceCategory) => setCategory(choiceCategory)}>
                <option>Attractions</option>
                <option>Events</option>
                <option>Venues</option>
                </select>
            

        </>
     );
}
 
export default HomePage;