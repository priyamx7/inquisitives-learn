import React from 'react';
import { useApp } from '../contexts/AppContext'
import likeImg from '../images/likeImg.png'
import { ImBin } from 'react-icons/im'

const Likes = () => {
    const { state, dispatch } = useApp();
    return (
        <div className="likesPage">
            <div className="likesVideosDescription">
                <h1>Liked Videos</h1>
                <img className="likeImg" src={likeImg} alt="like icon" />
            </div>
            <div className="likedVideosContainer">
                {state.likes.map(likedVideo => {
                    return (
                        <div className="likedVideoCard">
                            <div>
                                <img className="likedVideoThumbnail" src={likedVideo.img} alt="likedVideoThumbnail" />
                            </div>
                            <div>
                                <p className="likedVideoTitle">{likedVideo.title}</p>
                                <p className="likedVideoChannelName">{likedVideo.channelName}</p>
                                <button className="btn deleteBtn" onClick={() => dispatch({ type: "REMOVE_FROM_LIKES", payload: likedVideo })}><ImBin /></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Likes;