var React = require("react");
var Main = require("./main");

class DisplayAllSongsList extends React.Component {
  render() {
    let link = "/songs";
    let songsArr = this.props.songsArr;
    let songsArrHtml = songsArr.map((element) => {
      let href = "/songs/" + element.id;
      let href2 = href + "/add";
      let text = element.title + " | " + element.name;
      return (
        <li>
          <a href={href}>{text}</a>
          <br></br>
          <a className="btn btn-secondary" href={href2}>
            Add To Playlist
          </a>
          {`  `}
          <a
            className="btn btn-secondary text-white cookiepl"
            id={element.id}
          >
            Add To Cookie Playlist
          </a>
          {/* <br></br>
          <div className="ml-4">
            <input
              className="form-check-input"
              type="checkbox"
              name="playlist_id"
              value={element.id}
            />
            <label>Favorite This!</label>
          </div> */}
          <br></br>
          <br></br>
        </li>
      );
    });

    const displayAllSongsList = (
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <form method="GET" action={link}>
              <h3>
                <u>All Songs</u>
              </h3>
              <br></br>

              <ul>{songsArrHtml}</ul>
            {/* </form>
            <form method="POST" action="/favorites">
              <input
                className="btn btn-primary"
                type="submit"
                value="Submit Favourite Songs"
              /> */}
              <br></br>
              <br></br>
            </form>
          </div>
        </div>
        <script src="/script-cookiepl.js"></script>
      </div>
    );

    return <Main children={displayAllSongsList} />;
  }
}

module.exports = DisplayAllSongsList;
