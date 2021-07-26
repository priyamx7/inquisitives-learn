import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../contexts/AppContext";

const Playlists = () => {
    const { state, dispatch } = useApp();
  return (
    <div>
      <h1 className="pageHeading">Playlists</h1>
      <div className="playListsContainer">
      <Link className="playListBoxLink" to="/likes">
        <div className="playListBox">
          <p className="playListName">Liked Videos</p>
        </div>
      </Link>
      <Link className="playListBoxLink" to="/watchLater">
        <div className="playListBox">
          <p className="playListName">Watch Later</p>
        </div>
      </Link>
      {state.playlists.map((playlist) => {
        return (
          <div>
            <Link className="playListBoxLink" to={`/playlists/${playlist._id}`}>
              <div className="playListBox">
                <p className="playListName">{playlist.name}</p>
              </div>
            </Link>
          </div>
        );
    })}
    </div>
    </div>
  );
};

export default Playlists;
