import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import EventPage from "./pages/EventPage"
import AttractionPage from "./pages/AttractionPage";
import {useState} from 'react'
import Wishlist from "./pages/Wishlist";



function App() {
  // const apiKey = "I2tZNbEtauHghOYF8Z22rOMU0VGJmLQt";
  const [wishlist, setWish] = useState([]);

  const addWish = (item) => {
    // setWish([...wishlist, item])
    // console.log(item)
    if(wishlist.includes(item)){
      // console.log("duplicate Item")
    } else{
      setWish([...wishlist, item]);
    }
    
  }

  const delWish = (item) => {
    const filteredWish = wishlist.filter((wishItem) =>{
      return wishItem !== item
    })
    setWish(filteredWish);
  }

return( 
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage wishlist={wishlist} addWish={addWish}/>} />
        <Route path="/attractions" element={<AttractionPage wishlist={wishlist} addWish={addWish}/>} />
        <Route path="wish" element={<Wishlist wishlist={wishlist} delWish={delWish} />} />
        
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
