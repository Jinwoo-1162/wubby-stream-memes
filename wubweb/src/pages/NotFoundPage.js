import tanWubby from "../images/tanWubby.jpg";
import "../CSS/Home.css";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="home-container">
      <img src={tanWubby} className="App-logo" alt="logo" />
      <span>Wubby Wubby Whoops! How did you end up here?</span>
      <Link to="/">
        <button className="big-button">Return Home</button>
      </Link>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
