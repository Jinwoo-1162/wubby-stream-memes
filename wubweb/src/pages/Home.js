import wubby7 from "../images/wubby7.png";
import "../CSS/Home.css";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-container">
      <img src={wubby7} className="App-logo" alt="logo" />
      <span>Welcome to the home for all things Wubby!</span>
      <div className="search-container">
        <input className="search-bar" placeholder="Type a meme"></input>
        <button className="big-button">Search</button>
      </div>
      <button className="big-button">Submit a meme</button>
      <Footer />
    </div>
  );
}

export default Home;
