import {Link} from "react-router-dom";


const Navbar = () => {
    return ( 
        <>
        <nav id="nav">
            <Link to="/" className="navLink">Home</Link>
            <Link to="/events" className="navLink">Events</Link>
            <Link to="/attractions" className="navLink">Attractions</Link>
        </nav>
        
        </>
     );
}
 
export default Navbar;