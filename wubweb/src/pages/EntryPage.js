import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function EntryPage(props) {
  const urlSplitArr = window.location.href.split("/");
  const entryEndpoint = urlSplitArr[urlSplitArr.length - 1];
  return (
    <div className="entry-page">
      <h1>{entryEndpoint}</h1>
      <p>
        {props.text}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        consectetur metus nulla, sed tincidunt libero lacinia finibus. Aenean
        lobortis, elit vitae laoreet elementum, erat enim dictum dolor, a rutrum
        purus ipsum eget ante. Vestibulum condimentum nisl quis arcu sagittis
        imperdiet. Donec in massa ut nisl mollis pharetra. Sed eleifend mauris
        massa, vel luctus risus porttitor nec. Duis consequat gravida lectus ut
        rutrum. Maecenas suscipit arcu eget mauris consectetur, sit amet finibus
        ligula malesuada. Quisque porta dui eget suscipit maximus. Donec varius
        magna quis bibendum feugiat. Donec ultricies lectus a fermentum
        porttitor. Mauris ac erat nunc. Cras maximus quis nibh eget consequat.
        Mauris pretium maximus mauris at maximus. Nullam quis blandit orci, quis
        luctus nunc. Donec nisi eros, facilisis et dolor vel, aliquam dictum
        nibh. Praesent quis pellentesque turpis. Fusce ac nunc iaculis,
        elementum enim vitae, vulputate eros. Integer condimentum ullamcorper
        lorem sed feugiat. Quisque efficitur urna eget lectus auctor egestas.
        Aenean ac purus pharetra, blandit purus in, viverra est. Vivamus vel
        sapien leo. Phasellus id faucibus urna. Fusce tincidunt est et odio
        ullamcorper scelerisque. Integer bibendum, velit a ullamcorper rhoncus,
        nulla ante malesuada mauris, vel facilisis elit nisl ut velit. Duis ut
        blandit ipsum, et pulvinar mauris. Nullam sed vehicula odio. Duis vel
        lorem eget tellus fringilla sagittis sed eget nisi. Duis eget nulla non
        justo pretium dictum. In mollis accumsan finibus. Nunc massa purus,
        maximus molestie pretium eget, vulputate eu orci.{" "}
      </p>
      <a href="https://youtu.be/hWjz1YucFXY?si=w8DPaY0uXv0H5da7&t=3000">
        {props.videoLink}https://youtu.be/hWjz1YucFXY?si=w8DPaY0uXv0H5da7&t=3000
      </a>
      <Link to="/">
        <button className="big-button">Return Home</button>
      </Link>
      <Footer />
    </div>
  );
}

export default EntryPage;
