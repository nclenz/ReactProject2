import Navbar from "../Navbar/Navbar";
import TopPicks from "../components/TopPicks";
import HomeEvents from "../components/HomeEvents";
import HomeAttractions from "../components/HomeAttractions";






const HomePage = () => {


    return ( 
        <div className=" bg-slate-200">
        <Navbar/>
        <TopPicks/>
        <HomeEvents/>
        <HomeAttractions/>
        </div>
        
     );
}
 
export default HomePage;