import { useRef, useState } from "react";

function SubmissionForm() {
  const entryTitleRef = useRef("");
  const entryBodyRef = useRef("");
  const entryLinkRef = useRef("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emptyTitle, setEmptyTitle] = useState(false);
  const [emptyBody, setEmptyBody] = useState(false);
  const [emptyLink, setEmptyLink] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let temp1 = entryTitleRef.current.value.trim() === "";
    let temp2 = entryBodyRef.current.value.trim() === "";
    let temp3 = entryLinkRef.current.value.trim() === "";
    setEmptyTitle(temp1);
    setEmptyBody(temp2);
    setEmptyLink(temp3);
    setFormSubmitted(!(temp1 || temp2 || temp3));
    if (!(temp1 || temp2 || temp3)) {
      entryTitleRef.current.value = "";
      entryBodyRef.current.value = "";
      entryLinkRef.current.value = "";
    }
  };

  return (
    <div className="submission-form-container">
      <span>
        {formSubmitted
          ? "Your submission is now in review!"
          : "Submit a Stream Meme!"}
      </span>
      {!formSubmitted ? (
        <form className="submission-form" onSubmit={(e) => handleSubmit(e)}>
          <textarea
            type="text"
            className="submission-form-input"
            placeholder={emptyTitle ? "Field cannot be empty" : "Entry title"}
            ref={entryTitleRef}
          />
          <textarea
            type="text"
            className="submission-form-input submission-form-text-body"
            placeholder={emptyBody ? "Field cannot be empty" : "Entry body"}
            ref={entryBodyRef}
          />
          <textarea
            type="text"
            className="submission-form-input"
            placeholder={
              emptyLink ? "Field cannot be empty" : "Link to Youtube VOD"
            }
            ref={entryLinkRef}
          />
          <button type="submit" className="big-button">
            Submit
          </button>
        </form>
      ) : (
        <button className="big-button" onClick={() => window.location.reload()}>
          Submit Again
        </button>
      )}
    </div>
  );
}

export default SubmissionForm;
