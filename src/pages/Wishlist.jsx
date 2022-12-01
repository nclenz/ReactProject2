import Navbar from "../Navbar/Navbar";

const Wishlist = ({wish, delWish}) => {

    return  (
    
    <>

    <Navbar/>
    <h1>Favs</h1>
    <div className="layout">
        {wish.map((item) =>(
            <div key={item.id} className="inline" >
                {<a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img  className="cursor-pointer" 
                    src = {item.images[0].url} 
                    />
                 </a>
                 }
                
                <button onClick={() => delWish(item)} >Delete</button>
            </div>
            ))}  
        </div>
  </>

);
}

export default Wishlist;


{/* {wish.map((item) => (
  <img key={item.id}src={item.images[0].url}>  
  <button onClick={() => delWish(item)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow" >Delete All</button>
  </img> 
))} */}