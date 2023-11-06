import wubby7 from "../images/wubby7.png";

function Home() {
  return (
    <div className="home-container">
      <img src={wubby7} className="App-logo" alt="logo" />
      <p>Welcome to the home for all things Wubby!</p>
      <input className="search-bar" placeholder="Type a meme"></input>
      <button className="big-button">Submit a meme</button>
    </div>
  );
}

export default Home;
