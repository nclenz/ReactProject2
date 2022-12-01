const Buttons = ({page, setPage}) => {
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

    return(
        <>
        <span className="float-right m-12">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
                    onClick={handlePreviousPage}>Prev
                    </button>

        {num.map((pageNum) => (
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
                onClick={() => handlePage(pageNum)}
                key={pageNum}>{pageNum}
                </button>
        ))}

            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
                onClick={handleNextPage}>Next</button>
        </span> 
        </>

    )

     
     
}
 
export default Buttons;