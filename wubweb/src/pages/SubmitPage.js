import gwiddy from "../images/gwiddy.gif";
import "../CSS/Home.css";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import SubmissionForm from "../Components/SubmissionForm";
import "../CSS/SubmitPage.css";

function SubmitPage() {
  return (
    <div id="submit-page-container">
      <img src={gwiddy} className="App-logo" alt="logo" />
      <SubmissionForm />
      <Link to="/">
        <button className="big-button">Return Home</button>
      </Link>
      <Footer />
    </div>
  );
}

export default SubmitPage;
