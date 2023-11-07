import wubby7 from "../images/wubby7.png";
import "../CSS/Home.css";
import Footer from "../Components/Footer";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const searchTerm = useRef("");
  const navigator = useNavigate(); // Get the navigator object

  const handleSearch = () => {
    const searchTermValue = searchTerm.current.value;
    // Update the URL when the "Search" button is clicked
    navigator(
      `/entry/${String(searchTermValue)
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]/g, "")}`
    );
  };
  return (
    <div className="home-container">
      <img src={wubby7} className="App-logo" alt="logo" />
      <span>Welcome to the home for all things Wubby!</span>
      <div className="search-container">
        <input
          className="search-bar"
          placeholder="Type a meme"
          ref={searchTerm}
        ></input>
        <button className="big-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <button className="big-button">Submit a meme</button>
      <Footer />
    </div>
  );
}

export default Home;
