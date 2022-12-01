import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import EventPage from "./pages/EventPage"
import AttractionPage from "./pages/AttractionPage";
import {useState} from 'react'
import Wishlist from "./pages/Wishlist";



function App() {
  // const apiKey = "I2tZNbEtauHghOYF8Z22rOMU0VGJmLQt";
  const [wish, setWish] = useState([]);

  const addWish = (item) => setWish([...wish, item]);

  const delWish = (item) => {
    const filteredWish = wish.filter((wishItem) =>{
      return wishItem !== item
    })
    setWish(filteredWish);
  }

return( 
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage wish={wish} addWish={addWish}/>} />
        <Route path="/attractions" element={<AttractionPage/>} />
        <Route path="wish" element={<Wishlist wish={wish} delWish={delWish} />} />
        
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
