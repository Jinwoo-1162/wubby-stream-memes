import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Entry from "../Components/Entry";
import "../CSS/EntryPage.css";
import dataBaseData from "../temp_storage.json";

function EntryPage(props) {
  const urlSplitArr = window.location.href.split("/");
  const entryEndpoint = urlSplitArr[urlSplitArr.length - 1];
  const [entryJson, setEntryJson] = useState({});
  useEffect(() => {
    setEntryJson(
      dataBaseData.entries.find((ele) => ele.key.includes(entryEndpoint))
    );
  }, []);

  return (
    <div id="entry-page">
      {entryJson !== undefined ? (
        <Entry
          entryTitle={entryJson.title}
          entryText={entryJson.body}
          entryLink={entryJson.link}
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
