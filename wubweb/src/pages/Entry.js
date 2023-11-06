function Entry(props) {
  return (
    <div className="entry-page">
      <span>{props.title}</span>
      <p>{props.text}</p>
      <a>{props.videoLink}</a>
    </div>
  );
}
