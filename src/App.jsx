import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import EventPage from "./pages/EventPage"
import AttractionPage from "./pages/AttractionPage";
import Venues from "./pages/VenuePage";


function App() {
  // const apiKey = "I2tZNbEtauHghOYF8Z22rOMU0VGJmLQt";

return( 
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/attractions" element={<AttractionPage/>} />
        <Route path="/venues" element={<Venues/>} />
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
