import React from "react";
import { useParams } from "react-router";
import { useApp } from "../contexts/AppContext";
import { useState } from "react";
import videos from "../data/data";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineClockCircle,
  AiFillClockCircle,
} from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";

const Video = () => {
  const { state, dispatch } = useApp();
  const { videoId } = useParams();
  const videoToShow = videos.find((video) => video._id === videoId);
  const [inputDisplay, setInputDisplay] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState("");
  // const [ isChecked, setIsChecked ] = useState(false);
  // console.log(state.playlists, "Playlists");
  
  return (
    <div className="uniqueVideoContainer">
      <div>
        <iframe
          className="videoEmbedBox"
          src={videoToShow.videoSrc}
          title={videoToShow.title}
        ></iframe>
      </div>
      <div>
        <p className="uniqueVideoCategory">#{videoToShow.category}</p>
        <p className="uniqueVideoTitle">{videoToShow.title}</p>
      </div>
      <div className="uniqueVideoButtons">
        <button
          className="btn uniqueVideoIcon"
          onClick={() => {
            state.likes.includes(videoToShow)
              ? dispatch({ type: "REMOVE_FROM_LIKES", payload: videoToShow })
              : dispatch({ type: "SET_LIKE", payload: videoToShow });
          }}
        >
          {state.likes.includes(videoToShow) ? (
            <AiFillLike />
          ) : (
            <AiOutlineLike />
          )}
        </button>
        <button
          className="btn uniqueVideoIcon"
          onClick={() =>
            state.watchLater.includes(videoToShow)
              ? dispatch({
                  type: "REMOVE_FROM_WATCH_LATER",
                  payload: videoToShow,
                })
              : dispatch({ type: "SET_WATCH_LATER", payload: videoToShow })
          }
        >
          {state.watchLater.includes(videoToShow) ? (
            <AiFillClockCircle />
          ) : (
            <AiOutlineClockCircle />
          )}
        </button>
        <button
          className="btn uniqueVideoIcon"
          onClick={() => setInputDisplay(!inputDisplay)}
        >
          <MdPlaylistAdd />
        </button>
        <div className="playListInputDiv"
        style={{ display: inputDisplay ? "block" : "none" }}>
          <input
            className="playListInput"
            onChange={(e) => setNewPlaylist(e.target.value)}
            type="text"
            placeholder="Enter Playlist Name"
          />
          <span>
            <button
              className="btn addPlayListBtn"
              onClick={() => {
                dispatch({ type: "CREATE_PLAYLIST", payload: newPlaylist });
                setNewPlaylist("");
              }}
            >
              +
            </button>
          </span>
          {state.playlists.map((playlist) => {
            return (
              <div>
                <input
                  type="checkbox"
                  checked={playlist?.videos?.includes(videoToShow)}
                  onClick={() =>
                    playlist?.video?.includes(videoToShow) ? 
                    dispatch({ type: "REMOVE_VIDEO_FROM_PLAYLIST", payload: videoToShow }) :
                    dispatch({
                      type: "ADD_VIDEO_IN_PLAYLIST",
                      payload: { playlistId: playlist._id, video: videoToShow },
                    })
                  }
                />{" "}
                <label>{playlist.name}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Video;
