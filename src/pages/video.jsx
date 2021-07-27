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
            <button
              className="addPlayListBtn"
              onClick={() => {
                dispatch({ type: "CREATE_PLAYLIST", payload: newPlaylist });
                setNewPlaylist("");
              }}
            >
              +
            </button>
          {state.playlists?.map((playlist) => {
            console.log(playlist.videos.includes(videoToShow))
            return (
              <div>
                <input
                  type="checkbox"
                  checked={playlist.videos.includes(videoToShow) ? true : false}
                  onClick={() =>
                    playlist.videos.includes(videoToShow) ? 
                    dispatch({ type: "REMOVE_VIDEO_FROM_PLAYLIST", payload: {playlistId: playlist._id, video: videoToShow} }) :
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
