import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Entry from "../Components/Entry";
import "../CSS/EntryPage.css";

function EntryPage(props) {
  const urlSplitArr = window.location.href.split("/");
  const entryEndpoint = urlSplitArr[urlSplitArr.length - 1];
  // let isValidEntry = false;
  // let allEntryArr = [];
  const [allEntryArr, setAllEntryArr] = useState([]);
  const [isValidEntry, setIsValidEntry] = useState(false);
  useEffect(() => {
    setAllEntryArr(["wubbywubbywoo", "hp", "tanwubby"]);
    // allEntryArr = ["wubbywubbywoo", "hp", "tanwubby"];
    // if (allEntryArr.includes(entryEndpoint)) {
    // setIsValidEntry(true);
    // isValidEntry = true;
    // } else {
    // setIsValidEntry(false);
    // isValidEntry = false;
    // }
  }, []);

  return (
    <div id="entry-page">
      {allEntryArr.includes(entryEndpoint) ? (
        <Entry
          entryTitle={entryEndpoint}
          entryText={"Some text"}
          entryLink={"https://google.com"}
        />
      ) : (
        <h1>Invalid Entry</h1>
      )}
      <Link to="/">
        <button className="big-button">Return Home</button>
      </Link>
      <Footer />
    </div>
  );
}

export default EntryPage;
