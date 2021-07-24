import React from "react";
import { useParams } from "react-router";
import { useApp } from "../contexts/AppContext";
import { useState } from 'react';
import videos from "../data/data";
import { AiOutlineLike, AiFillLike, AiOutlineClockCircle, AiFillClockCircle } from 'react-icons/ai'
import { MdPlaylistAdd, MdPlaylistAddCheck } from 'react-icons/md'

const Video = () => {
  const { state, dispatch } = useApp();
  const { videoId } = useParams();
  const videoToShow = videos.find((video) => video._id === videoId);
  const [ likeToggle, setLikeToggle ] = useState(false);

  return (
    <div className="uniqueVideoContainer">
        <div>
            <iframe className="videoEmbedBox" src={videoToShow.videoSrc} title={videoToShow.title}></iframe>
        </div>
        <div>
            <p className='uniqueVideoCategory'>#{videoToShow.category}</p>
            <p className='uniqueVideoTitle'>{videoToShow.title}</p>
        </div>
        <div className="uniqueVideoButtons">
            <button className="btn uniqueVideoIcon" onClick={() => dispatch({ type: "SET_LIKE", payload: videoToShow })}><AiOutlineLike /></button>
            <button className="btn uniqueVideoIcon" disabled={state.watchLater.includes(videoToShow) ? true : false} onClick={() => dispatch({ type: "WATCH_LATER", payload: videoToShow })}>{ state.watchLater.includes(videoToShow) ? <AiFillClockCircle /> : <AiOutlineClockCircle /> }</button>
            <button className="btn uniqueVideoIcon"><MdPlaylistAdd /></button>
        </div>
    </div>
  );
};

export default Video;
