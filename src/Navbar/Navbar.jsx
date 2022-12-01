import {Link} from "react-router-dom";
import Image from "../components/image";


const Navbar = () => {
    return ( 
        <>
        <Image/>
        <nav className="nav"   >
            <Link to="/" >Home</Link>
            <Link to="/events" >Events</Link>
            <Link to="/attractions">Attractions</Link>
            <Link to="/venues">Venue</Link>
        </nav>
        
        </>
     );
}
 
export default Navbar;