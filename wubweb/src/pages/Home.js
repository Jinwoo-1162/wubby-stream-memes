import wubby7 from "../images/wubby7.png";
import Footer from "../Components/Footer";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Home.css";

function Home() {
  const searchTerm = useRef("");
  const [alertNoInput, setAlertNoInput] = useState(false);
  const navigator = useNavigate(); // Get the navigator object

  const handleSearch = () => {
    const searchTermValue = String(searchTerm.current.value)
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, "");
    if (searchTermValue === "") {
      // no input was provided
      setAlertNoInput(true);
    } else {
      setAlertNoInput(false);
      // Update the URL when the "Search" button is clicked
      if (searchTermValue) navigator(`/entry/${searchTermValue}`);
    }
  };

  function handleEnter(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <div className="home-container">
      <img src={wubby7} className="App-logo" alt="logo" />
      <span>Welcome to the home for all things Wubby!</span>
      <div className="search-container">
        <input
          className="search-bar"
          placeholder={alertNoInput ? "Input can't be empty!" : "Type a meme"}
          ref={searchTerm}
          onKeyDown={(e) => handleEnter(e)}
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
