import React from 'react'
import '../App.css'
import videos from '../data/data';
import { useApp } from '../contexts/AppContext';
import { Link } from 'react-router-dom'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { AiFillClockCircle } from 'react-icons/ai'

const Home = () => {
    const { state, dispatch } = useApp();
    return (
        <div className="videosContainer">

            {videos.map(video => {
                return (
                    <div className="videoCard">
                        <Link className="videoBoxLink" to={`/video/${video._id}`}>
                            <div>
                                <img className="thumbnail" src={video.img} alt="video thumbnail" />
                            </div>
                            <div className="avatarAndTitle">
                                <div>
                                    <img className="avatar avatarSm" src={video.avatarImg} alt="avatar" />
                                </div>
                                <div className="videoTitle">{video.title}</div>
                            </div>
                            <div className="channelName">{video.channelName}</div>
                            <div className="categoryAndIcon">
                                <div className="categoryName">{video.category}</div>
                            </div>
                        </Link>
                        <button className="btn watchLaterBtn" disabled={state.watchLater.includes(video) ? true : false} onClick={() => dispatch({ type: "SET_WATCH_LATER", payload: video })}>{state.watchLater.includes(video) ? <AiFillClockCircle /> : <AiOutlineClockCircle />}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;