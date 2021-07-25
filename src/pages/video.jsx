import React from "react";
import { useParams } from "react-router";
import { useApp } from "../contexts/AppContext";
import videos from "../data/data";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineClockCircle,
  AiFillClockCircle,
} from "react-icons/ai";
import { MdPlaylistAdd, MdPlaylistAddCheck } from "react-icons/md";

const Video = () => {
  const { state, dispatch } = useApp();
  const { videoId } = useParams();
  const videoToShow = videos.find((video) => video._id === videoId);

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
            state.watchLater.includes(videoToShow) ? dispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: videoToShow }):
            dispatch({ type: "SET_WATCH_LATER", payload: videoToShow })
          }
        >
          {state.watchLater.includes(videoToShow) ? (
            <AiFillClockCircle />
          ) : (
            <AiOutlineClockCircle />
          )}
        </button>
        <button className="btn uniqueVideoIcon">
          <MdPlaylistAdd />
        </button>
      </div>
    </div>
  );
};

export default Video;
