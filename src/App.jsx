import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import EventPage from "./pages/EventPage"
import AttractionPage from "./pages/AttractionPage";



function App() {



  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/attractions" element={<AttractionPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
