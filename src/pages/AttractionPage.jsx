import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Loader from "../components/Loader";

const AttractionPage = () => {
  const [attract, setAttract] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [segment, setSegment] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Filter by Segment");

  const apiKey = "I2tZNbEtauHghOYF8Z22rOMU0VGJmLQt";

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    page < 1 ? "" : setPage(page - 1);
  };

  const handlePage = (toPage) => {
    setPage(toPage);
  };

  let num = [];
  for (let i = 1; i >= 1; i--) {
    num.push(i);
  }

  useEffect(() => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/attractions.json?page=${page}&size=20&apikey=${apiKey}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoaded(true);
        setAttract(data._embedded.attractions);
        setSegment(data._embedded.attractions);
      });
  }, [page]);

  const mapped = segment.map((x) => x.classifications[0].segment.name);
  const uniqueSegment = [...new Set(mapped)];

  if (!isLoaded) {
    return <Loader />;
  } else
    return (
      <>
        <Navbar />
        <span>
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
            onClick={handleNextPage}
          >
            Next
          </button>

          {num.map((pageNum) => (
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
              onClick={() => handlePage(pageNum)}
              key={pageNum}
            >
              {pageNum}
            </button>
          ))}
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
            onClick={handlePreviousPage}
          >
            Prev
          </button>

          <select
            name="segment"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option default>Filter by Segment</option>
            {uniqueSegment.map((x, index) => (
              <option key={index}>{x}</option>
            ))}
          </select>
        </span>
        <div className="layout">
          {attract
            .filter((item) =>
              selectedCategory === "Filter by Segment"
                ? item
                : item.classifications[0].segment.name === selectedCategory
            )
            .map((x) => (
              <div key={x.id} className="grid-item">
                {
                  <a href={x.url} target="_blank" rel="noopener noreferrer">
                    {<img src={x.images[0].url} />}
                  </a>
                }
                <p>{x.name}</p>
              </div>
            ))}
        </div>
      </>
    );
};

export default AttractionPage;
