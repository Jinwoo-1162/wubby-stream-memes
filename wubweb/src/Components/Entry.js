function Entry(props) {
  return (
    <div className="entry">
      <h1>{props.entryTitle}</h1>
      <p>{props.entryText}</p>
      <a href={props.entryLink}>Link</a>
    </div>
  );
}

export default Entry;
